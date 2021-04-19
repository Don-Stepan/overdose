define([
    'jquery',
    'slick'
], function($) {
    $('.product-items').slick({
       "slidesToShow": 4,
        "slidesToScroll": 1,
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 2000,
    });
});  

    