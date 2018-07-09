(function() {
    var app = angular.module("contactApp");
    app.controller("contactController", contactController);

    function contactController(contactDataServiceSrvc) {
        var that = this;

        this.editMode = false;

        contactDataServiceSrvc.getContacts()
            .then(function (data) {
                that.contacts = data;
            });

        this.selectContact = function(index) {
            that.successMessage = undefined;
            this.selectedContact = this.contacts[index];
        }

        this.toggleEditMode = function() {
            this.editMode = !this.editMode;
        }

        this.saveUser = function() {
            this.toggleEditMode();

            var userData = this.selectedContact;

            contactDataServiceSrvc.saveUser(userData)
                .then(function () {
                    that.successMessage = "Data succesfully updated ...";
                });
        }
    }
})();