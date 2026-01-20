# AI Coding Instructions for Drew's Website

## Project Overview
This is a personal website built with Jekyll and hosted on GitHub Pages at www.drewfass.com. The site uses the minimal-mistakes theme and serves as a hub for:
- **Blog**: Personal thoughts and reflections that evolve over time
- **Integrations**: Connected feeds from external services (Goodreads for books, Strava for activities, etc.) displayed on dedicated pages
- **Portfolio**: Drew's favorite foods, activities, books, hobbies, and data visualizations

## Architecture & Key Files
- **_config.yml**: Jekyll configuration with minimal-mistakes theme, collections, navigation, and plugins
- **Gemfile**: Dependencies including minimal-mistakes-jekyll and plugins (jekyll-paginate, jekyll-sitemap, jekyll-feed)
- **index.md**: Homepage with recent posts and featured sections
- **blog.md, about.md, integrations.md**: Main navigation pages
- **_posts/**: Blog posts (YYYY-MM-DD-slug.md format)
- **_portfolio/**: Portfolio items (collections output)
- **_integrations/**: Integration feeds (collections output)
- **_layouts/**: Custom layout overrides for minimal-mistakes
- **CNAME**: Custom domain configuration (www.drewfass.com)
- **.gitignore**: Excludes _site/, .jekyll-cache/, and Gemfile.lock

## Development Workflow
1. **Local preview**: Run `docker-compose up` to build and preview at http://localhost:4000
2. **Blog posts**: Add to `_posts/` directory following Jekyll naming (YYYY-MM-DD-slug.md). Use front matter with `layout: single`, title, date, and categories
3. **Portfolio items**: Add to `_portfolio/` collection. Use front matter with `layout: single` and relevant metadata
4. **Integration pages**: Create pages in root directory (e.g., books.md, activities.md) or use `_integrations/` collection
5. **Navigation**: Update `navigation:` section in _config.yml to add/modify main menu
6. **Publishing**: Push to main branch; GitHub Pages automatically builds and deploys

## Project Conventions
- **Minimal-mistakes theme**: Highly customizable theme with built-in collections support
- **Collections-based organization**: Use `_posts/`, `_portfolio/`, and `_integrations/` for clear content separation
- **Author profile**: Homepage and pages show author profile; configure in _config.yml
- **Compound Manual design inspiration**: Clean, minimal aesthetic with organized collections
- **Clean organization**: Keep content organized by type (blog in _posts/, portfolio in _portfolio/, etc.)

## Common Tasks
- **Update homepage**: Edit index.md; displays recent posts and featured sections
- **Create blog post**: Add file to `_posts/` with front matter (layout, title, date, categories)
- **Create portfolio item**: Add file to `_portfolio/` collection folder
- **Add integrations**: Create pages in `_integrations/` or custom pages with embed code
- **Customize navigation**: Update `navigation:` list in _config.yml
- **Customize theme**: Override minimal-mistakes files in `_layouts/` or create custom CSS in `assets/css/`
- **Add custom styling**: Create `assets/css/style.scss` to extend theme styles

## Dependencies & Tools
- **Jekyll**: Static site generator
- **minimal-mistakes-jekyll**: Full-featured, customizable theme for Jekyll
- **jekyll-paginate**: Pagination for blog posts
- **jekyll-sitemap**: Automatic sitemap generation
- **jekyll-feed**: RSS feed generation
- **Docker**: For local development (Ruby 3.3-alpine)
- **GitHub Pages**: Automatic deployment on push to main branch

## Key Design Elements
- **Navigation**: Main menu defined in _config.yml `navigation:` array
- **Collections**: `_posts/`, `_portfolio/`, and `_integrations/` organized by content type
- **Homepage**: Recent posts and featured links to main sections
- **Author Profile**: Enabled on all pages; configure author info in _config.yml
- **Minimal aesthetic**: Inspired by Compound Manual's clean, organized design
