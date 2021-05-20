define([
    'jquery',
    'matchMedia',
], function($, mediaCheck) {

    $.widget ('custom.categoryButton', {
        _create: function () {
            mediaCheck({
                media: '(min-width: 768px)',
                // Switch to Desktop Version
                entry: function () {
                    $( ".sidebar-main" ).removeClass( "mobile-v-category");
                    $('.sidebar-main').css({"display":"block"});
                },
                // Switch to Mobile Version
                exit: function () {
                    $( ".sidebar-main" ).addClass( "mobile-v-category");
                    $('.sidebar-main').css({"display":"none"});

                    $('.mobile-category-button').click(function (){
                        $('.sidebar-main').show();
                        $('.page-header').hide();
                        $("body").css({"overflow":"hidden"});
                        $('.sidebar-main').css({"padding-right":"0"});
                    });
                    $('.filter-header-close').click(function (){
                        $('.sidebar-main').hide();
                        $('.page-header').show();
                        $("body").css({"overflow":"scroll"});
                    });
                    $('.category-button-popup').click(function () {
                        $('.sidebar-main').hide();
                        $('.page-header').show();
                        $("body").css({"overflow":"scroll"});
                    });
                }
            });
        },
    });

    return $.custom.categoryButton;

});



