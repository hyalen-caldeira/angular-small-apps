(function () {
    var app = angular.module("contactApp");
    
    app.value("appFunctionSrvc", function(value) {
        console.log(value);
    });
})();