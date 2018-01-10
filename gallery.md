---
title: Gallery
layout: default
---


<!-- The filtering javascript -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.0/isotope.pkgd.js" type="text/javascript"></script>
<script src="/js/imagesloaded.pkgd.js" type="text/javascript"></script>


<!-- The Lightbox gallery -->
{% include lightbox.html %}


<!-- The filtering buttons -->
<div id="filters" class="button-group">
    <button class="button is-checked" data-filter="*">show all</button>
    <button class="button" data-filter=".book">book</button>
    <button class="button" data-filter=".acting">acting</button>
    <button class="button" data-filter=".directing">directing</button>
    <button class="button" data-filter=".silks">silks</button>
    <button class="button" data-filter=".workshop">workshops</button>
</div>

<!-- The list of images -->

<div class="container-fluid">
  <div id="links">
    {% for img in site.data.images %}
    <div class="thumb {{ img[1].category }}">
      <a href="{{ img[1].path }}" title="{{ img[1].category }}" data-gallery>
        <img src="{{ img[1].thumb }}" alt="{{ img[0] }}" border="0">
      </a>
    </div>
    {% endfor %}
  </div>
</div>

<!-- <div class="thumb book"><a href="https://image.ibb.co/kgpS7R/pic_015.jpg" title="Book" data-gallery><img src="https://thumb.ibb.co/hr4G1m/pic_015.jpg" alt="pic_015" border="0"></a></div> -->

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
  $('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  });
</script>
