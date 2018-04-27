---
title: Gallery
layout: default
---


<!-- The filtering javascript -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.0/isotope.pkgd.js" type="text/javascript"></script>
<script src="/js/imagesloaded.pkgd.js" type="text/javascript"></script>


<!-- The Lightbox gallery -->
{% include lightbox.html %}
{% include filter-bar.html %}


<!-- The list of images -->

<div class="container-fluid" id="links-parent">
  <div id="links" class="gallery">
    {% for img in site.data.images %}
      {% if img[1].hidden != true %}
      <!-- Set the image title to the attribution if it exists -->
        {% if img[1].attribution != nil %}
           {% assign attrtag = img[1].attribution %}
           {% assign attr = site.data.attributions[ attrtag ] %}
           {% assign name = attr.name%}
           {% capture title %}Photo by: {{ name }}{% endcapture %}
        {% else %}
          {% assign title = img[1].category %}
        {% endif %}
        <div class="thumb {{ img[1].category }}">
            <a href="{{ img[1].path }}" title="{{ title }}" data-gallery>
            <img src="{{ img[1].thumb }}" alt="{{ img[0] }}" border="0">
            </a>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>


<script type="text/javascript">
  var $container = $('#links').imagesLoaded( function() {;
      // init
      $container.isotope({
      // options
          itemSelector: '.thumb',
          layoutMode: 'masonry',
      });
  });

  // filter items on button click
  $('#filter-bar').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  });
</script>
