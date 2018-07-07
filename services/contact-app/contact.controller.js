(function() {
    var app = angular.module("contactApp");
    app.controller("contactController", contactController);

    function contactController(contactDataServiceSrvc) {
        this.contacts = contactDataServiceSrvc.contacts;

        this.selectedContact = this.contacts[0];

        this.selectContact = function(index) {
            this.selectedContact = this.contacts[index];
        }
    }
})();