define([
    'jquery',
    'matchMedia',
], function($, mediaCheck) {

    $.widget ('custom.categoryButton', {
        sidebarSelector: '.sidebar-main',

        _create: function () {
            mediaCheck({
                media: '(min-width: 768px)',
                // Switch to Desktop Version
                entry: function () {
                    $(self.sidebarSelector).removeClass( "mobile-v-category");
                    $(self.sidebarSelector).css({"display":"block"});
                },
                // Switch to Mobile Version
                exit: function () {
                    $(self.sidebarSelector).addClass( "mobile-v-category");
                    $(self.sidebarSelector).css({"display":"none"});

                    $('.mobile-category-button').click(function (){
                        self.openPopup();
                    });
                    $('.filter-header-close').click(function (){
                        self.closePopup();
                    });
                    $('.category-button-popup').click(function () {
                        self.closePopup();
                    });
                },
                openPopup: function() {
                    $(self.sidebarSelector).show();
                    $('.page-header').hide();
                    $("body").css({"overflow":"hidden"});
                    $(self.sidebarSelector).css({"padding-right":"0"});
                },
                closePopup: function() {
                    $(self.sidebarSelector).hide();
                    $('.page-header').show();
                    $("body").css({"overflow":"scroll"});
                }
            });
        },
    });
    return $.custom.categoryButton;
});



