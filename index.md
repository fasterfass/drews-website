---
layout: home
title: Welcome to Drew's Website!
author_profile: true
---

<div id="knowledge-graph" style="width:100%;height:500px;margin-bottom:2rem;"></div>
<script src="https://unpkg.com/graphology@0.26.0/dist/graphology.umd.min.js"
  integrity="sha384-YdXPUVLFDJ3oITK7LFAPRyzkOcDK06bb7KRaE8GiQyGLsrvHaLS9Ej/lELMC7aCE"
  crossorigin="anonymous"></script>
<script src="https://unpkg.com/sigma@3.0.2/dist/sigma.min.js"
  integrity="sha384-DPqVVIwLfHZ98UMPbPxfthtHyUuc0gd/jdS/udObmiaCBMi97XcvT6JU2zqv0NCj"
  crossorigin="anonymous"></script>
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
