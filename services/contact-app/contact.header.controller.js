(function() {
    var app = angular.module("contactApp");

    app.controller("headerController", headerController);

    function headerController(appValueSrvc, appFunctionSrvc, appObjectSrvc, appDataFactorySrvc) {
        appFunctionSrvc("I'm on header ... " + appObjectSrvc.firstName);
        this.appValueSrvc = appDataFactorySrvc.name;
    }
})();