define([
    'jquery',
    'matchMedia',
], function($, mediaCheck) {

    $.widget ('custom.categoryButton', {

        _create: function () {
            let sidebarSelector = '.sidebar-main';
            let pageHiderSelector = '.page-header';

            mediaCheck({
                media: '(min-width: 768px)',
                // Switch to Desktop Version
                entry: function () {
                    $(sidebarSelector).removeClass( "mobile-v-category");
                    $(sidebarSelector).show();
                },
                // Switch to Mobile Version
                exit: function () {
                    $(sidebarSelector).addClass( "mobile-v-category");
                    $(sidebarSelector).hide();

                    $('.mobile-category-button').click(function (){
                        $(sidebarSelector).show();
                        $(pageHiderSelector).hide();
                        $("body").css({"overflow": "hidden"});
                        $(sidebarSelector).addClass('openPopup');
                    });
                    $('.filter-header-close').click(function (){
                        $(sidebarSelector).hide();
                        $(pageHiderSelector).show();
                        $("body").css({"overflow": "scroll"});
                    });
                    $('.category-button-popup').click(function () {
                        $(sidebarSelector).hide();
                        $(pageHiderSelector).show();
                        $("body").css({"overflow": "scroll"});
                    });
                },
            });
        },
    });
    return $.custom.categoryButton;
});



