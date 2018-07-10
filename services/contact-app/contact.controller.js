(function() {
    var app = angular.module("contactApp");
    app.controller("contactController", contactController);

    function contactController(contactDataServiceSrvc) {
        var that = this;

        this.editMode = false;
        this.addMode = false;

        // Get all contacts
        contactDataServiceSrvc.getContacts()
            .then(function (data) {
                that.contacts = data;
            });

        this.selectContact = function(index) {
            this.successMessage = undefined;
            this.errorMessage = undefined;
            this.selectedContact = this.contacts[index];
        }

        this.toggleEditMode = function() {
            this.editMode = !this.editMode;
        }

        this.saveUser = function() {
            this.toggleEditMode();

            var userData = this.selectedContact;

            if (this.addMode) {
                contactDataServiceSrvc.createUser(userData)
                    .then(function () {
                        that.successMessage = "Data succesfully created ...";
                    }, function() { // Error
                        that.errorMessage = "There was an error on creating a new user. Please, try again ...";
                    });

                this.addMode = false;
            } else {
                contactDataServiceSrvc.saveUser(userData)
                    .then(function () {
                        that.successMessage = "Data succesfully updated ...";
                    }, function() { // Error
                        that.errorMessage = "There was an error on updating user. Please, try again ...";
                    });
            }
        }

        this.addContact = function() {
            this.selectedContact = {
                "id" : new Date().toTimeString()
            };

            this.editMode = true;
            this.addMode = true;
        }
    }
})();