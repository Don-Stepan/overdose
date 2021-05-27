define([
    'jquery',

    'accordion',
], function($) {

    $.widget ('custom.accordion', {

        _create: function () {
            $(".filter-options").accordion({
                "active": [1, 2],
                "collapsible": true,
                "openedState": "active",
                "multipleCollapsible": true,
            });
        },
    });
    return $.custom.accordion;

});
