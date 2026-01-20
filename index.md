---
layout: home
author_profile: true
---

# Welcome to Drew's Website

A curated collection of thoughts, favorites, and integrations.

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
