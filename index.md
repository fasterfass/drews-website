---
layout: home
title: Welcome to Drew's Website!
author_profile: true
---

<div id="knowledge-graph" style="width:100%;height:500px;margin-bottom:2rem;"></div>
<script src="https://unpkg.com/graphology@0.25.1/dist/graphology.umd.min.js"></script>
<script src="https://unpkg.com/sigma@2.4.0/build/sigma.min.js"></script>
<script src="/assets/js/knowledge-graph.js"></script>

A curated collection of thoughts, learnings, and random fascinations...

## Most Recent

{% assign posts = site.posts | sort: 'date' | reverse | slice: 0, 5 %}
{% for post in posts %}
  - [{{ post.title }}]({{ post.url }}) – {{ post.date | date: "%b %d, %Y" }}
{% endfor %}

[View all posts →](/blog/)

## Featured Sections

- **[Blog](/blog/)** – Personal thoughts and reflections
- **[About](/about/)** – Learn more about this space
- **[Integrations](/integrations/)** – Connected feeds and services
