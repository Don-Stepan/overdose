define([
    'jquery',
    'Magento_Ui/js/modal/modal',
    'Magento_Customer/js/customer-data',
    'mage/translate'
], function($, modal, customerData) {

    $.widget ('custom.mymodal', {
        options: {
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
        },

        _create: function () {
            this.initModal();
            this.populateData();
         },

         initModal: function() {
            var popup = modal(this.options, $('.pop-up'));
            $('.my-request-bottom').click(function(){
                $('.pop-up').modal('openModal');
            });
         },

         populateData: function() {
            let customer = customerData.get('customer')();
            let firstName = customer.fullname.split(" ")[0];
            let lastName = customer.fullname.split(" ")[1];
            $('#fname').val(firstName);
            $('#lname').val(lastName);
         }
     });

    return $.custom.mymodal;
});
