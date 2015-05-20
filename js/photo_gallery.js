// external js: isotope.pkgd.js

$( document ).ready( function() {
    // init Isotope
    var $container = $('#container').imagesLoaded( function() {
        $container.isotope({
            itemSelector: '.thumb',
            layoutMode: 'fitRows'
        });
    });

    // filter items on button click
    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});
