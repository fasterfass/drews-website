---
layout: home
title: Welcome to Drew's Website!
author_profile: true
---

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
