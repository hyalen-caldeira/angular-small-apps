(function () {
    var app = angular.module("contactApp");

    app.service("appDataServiceSrvc",  
        // Construction function --> can be called by new AppConfig()
        function AppConfig(appFunctionSrvc) { // Execute the constructor --> new AppConfig()
            // JS adds this line --> var this = {};
            this.name = "Gabriela";
            this.author = "Gontijo";
            this.builtDate = new Date().toDateString();

            appFunctionSrvc("I'm construction function ...");
            // JS adds this line --> return this;
    });
})();