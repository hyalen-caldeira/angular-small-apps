(function() {
    var app = angular.module("contactApp");

    app.controller("footerController", footerController);

    function footerController(appFunctionSrvc, appObjectSrvc, appDataServiceSrvc) {
        appFunctionSrvc("I'm on footer ... " + appObjectSrvc.lastName);
        this.appValueSrvc = appDataServiceSrvc.name;
        this.appValueSrvc = "Gabriela";
    }
})();