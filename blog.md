---
title: Blog
layout: default
---


{% for post in site.posts %}
  <div class="entry">
  	<div class="entrytitle">
  		<h2>{{ post.title }}</h2>
  		<h3>{{ post.date | date_to_string }}</h3>
  	</div>
   {{ post.excerpt }}
   <a href="{{ post.url }}">Read more</a>

  </div>
{% endfor %}
