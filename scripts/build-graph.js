// build-graph.js
// Node.js script to generate a static graph.json for the knowledge graph
// Run: node scripts/build-graph.js

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');

const POSTS_DIR = path.join(__dirname, '../_posts');
const EXTERNAL_NODES_PATH = path.join(__dirname, '../_data/external_nodes.yml');
const OUTPUT_PATH = path.join(__dirname, '../assets/graph.json');

/**
 * Retrieve markdown filenames from the posts directory.
 * @returns {string[]} Filenames from `POSTS_DIR` that end with `.md`.
 */
function getPostFiles() {
  return fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
}

/**
 * Load markdown files from the posts directory, parse their frontmatter, and produce post node objects.
 *
 * Skips files missing or containing an invalid `date` in frontmatter. Uses `data.permalink` when present;
 * otherwise derives a URL from the filename pattern `YYYY-MM-DD-slug.md` and the first category in `data.categories`,
 * falling back to `/<filename-without-ext>.html` when the pattern does not match.
 *
 * @returns {Array<Object>} An array of post objects with the shape:
 *   - id: string (filename without `.md`)
 *   - title: string
 *   - date: Date
 *   - url: string
 *   - tags: Array<string>
 *   - type: string (value `'post'`)
 */
function parsePosts() {
  const files = getPostFiles();
  const posts = [];
  files.forEach(filename => {
    const filePath = path.join(POSTS_DIR, filename);
    const { data } = matter(fs.readFileSync(filePath, 'utf8'));
    let date = null;
    if (data.date) {
      date = new Date(data.date);
      if (isNaN(date.getTime())) {
        console.warn(`Warning: Invalid date in post ${filename}: ${data.date}`);
        date = null;
      }
    } else {
      console.warn(`Warning: Missing date in post ${filename}`);
    }
    if (date === null) {
      // Skip this post entirely (or set fallback logic here if desired)
      return;
    }
      // Build the URL: if permalink, use it. Otherwise, use /[category]/YYYY/MM/DD/slug.html if category exists, else fallback
      let url = null;
      if (data.permalink) {
        url = `/${data.permalink.replace(/^\/+/, '')}`;
      } else {
        // Extract date parts and slug
        const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
        if (match) {
          const [ , year, month, day, slug ] = match;
          let category = '';
          if (Array.isArray(data.categories) && data.categories.length > 0) {
            category = data.categories[0];
          } else if (typeof data.categories === 'string' && data.categories) {
            category = data.categories;
          }
          url = category
            ? `/${category}/${year}/${month}/${day}/${slug}.html`
            : `/${year}/${month}/${day}/${slug}.html`;
        } else {
          // fallback to old logic if filename doesn't match
          url = `/${filename.replace('.md', '')}.html`;
        }
      }
      posts.push({
        id: filename.replace('.md', ''),
        title: data.title,
        date,
        url,
        tags: data.tags || [],
        type: 'post',
      });
  });
  return posts;
}

/**
 * Load external node definitions from the YAML file at EXTERNAL_NODES_PATH.
 *
 * If the file does not exist or the parsed result is falsy, returns an empty array.
 * @returns {any} The parsed YAML value (typically an array of external node objects), or `[]` when missing or empty.
 */
function parseExternalNodes() {
  if (!fs.existsSync(EXTERNAL_NODES_PATH)) return [];
  const yamlData = fs.readFileSync(EXTERNAL_NODES_PATH, 'utf8');
  return yaml.load(yamlData) || [];
}

/**
 * Construct graph edges between posts and from external nodes to posts.
 *
 * Iterates posts to create directed post→post edges from older to newer posts that share one or more tags, and processes external nodes to create external→post edges either targeting posts by tag (fan-out) or by explicit post id.
 *
 * @param {Array<Object>} posts - Array of post objects with at least `{ id: string, date: Date|null, tags: string[] }`.
 * @param {Array<Object>} externalNodes - Array of external node objects; each may include `id` and an `edges` array where each edge has either `tag` or `post_id`.
 * @returns {Array<Object>} Array of edge objects. Post→post edges have `{ source, target, tags }`. External→post edges have `{ source, target, type: 'external', tag? }`.
 */
function buildEdges(posts, externalNodes) {
  const edges = [];
  // Post→post edges (ignore posts with null/invalid dates)
  for (let i = 0; i < posts.length; i++) {
    if (!posts[i].date) continue;
    for (let j = 0; j < posts.length; j++) {
      if (i === j) continue;
      if (!posts[j].date) continue;
      const sharedTags = posts[i].tags.filter(tag => posts[j].tags.includes(tag));
      if (sharedTags.length && posts[i].date < posts[j].date) {
        edges.push({ source: posts[i].id, target: posts[j].id, tags: sharedTags });
      }
    }
  }
  // External→post edges
  for (const ext of externalNodes) {
    if (!ext.edges) continue;
    for (const edge of ext.edges) {
      if (edge.tag) {
        // Link to all posts with this tag
        posts.filter(p => p.tags.includes(edge.tag)).forEach(p => {
          edges.push({ source: ext.id, target: p.id, type: 'external', tag: edge.tag });
        });
      } else if (edge.post_id) {
        edges.push({ source: ext.id, target: edge.post_id, type: 'external' });
      }
    }
  }
  return edges;
}

/**
 * Build graph data from posts and external nodes and write it to disk.
 *
 * Reads parsed posts and external node definitions, constructs `nodes` and `edges` for the graph,
 * ensures the output directory exists, writes the resulting `{ nodes, edges }` JSON to OUTPUT_PATH,
 * and logs the written path.
 */
function main() {
  const posts = parsePosts();
  const externalNodes = parseExternalNodes();
  const nodes = [
    ...posts.map(p => ({
      id: p.id,
      label: p.title,
      url: p.url,
      type: 'post',
      tags: p.tags,
      date: p.date,
    })),
    ...externalNodes.map(e => ({
      id: e.id,
      label: e.label,
      url: e.url,
      type: e.type,
      icon: e.icon,
      color: e.color,
    })),
  ];
  const edges = buildEdges(posts, externalNodes);
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ nodes, edges }, null, 2));
  console.log('Graph data written to', OUTPUT_PATH);
}

main();
