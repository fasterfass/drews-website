---
layout: single
title: Blog
permalink: /blog/
author_profile: true
---

# Latest Thoughts

Personal reflections and ideas that evolve over time.

{% assign posts = site.posts | sort: 'date' | reverse %}

<div class="entries-{{ page.entries_layout | default: 'list' }}">
  {% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
  {% endfor %}
</div>
