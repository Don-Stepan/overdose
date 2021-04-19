define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/translate',
    'Magento_Customer/js/customer-data'
    
], function($, modal) {
    var options = {
        type: 'popup',
        responsive: true,
        innerScroll: true,
        title: $.mage.__('My form'),
        buttons: [{
            text: $.mage.__('Continue'),
            class: '',
            click: function () {
                this.closeModal();
            }
        }]
    };
    var popup = modal(options, $('.pop-up'));
    $('.my-request-bottom').click(function(){
      $('.pop-up').modal('openModal');
    });
});