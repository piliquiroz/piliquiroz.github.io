---
title: Home
layout: default
---

<div class="row">
    <div class="col-md-12">
    <!-- Just a comment -->
    {% assign img = site.data.images | where:"name","pic_007" | first}
      <img class="img-title" src={{ img.path }}>
    </div>
</div>
