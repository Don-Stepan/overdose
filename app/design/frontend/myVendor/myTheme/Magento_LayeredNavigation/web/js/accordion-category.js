define([
    'jquery',
], function($) {

    $.widget ('custom.accordion', {
        _create: function () {
            this.initAccordion();
        },

        initAccordion: function() {
            let acc = $('.category-accordion');

            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    let panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                });
            }
        },
    });
    return $.custom.accordion;

});
