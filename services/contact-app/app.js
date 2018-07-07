// Create a module
var app = angular.module("contactApp", []);
// To get a reference for a module already created call the module without []. 
// Exemple --> var app = angular.module("contactApp");

// Will be called by dependency inject
app.factory("appDataFactorySrvc", prepareAppConfig); // Execute the prepareAppConfig and return the value

// appFunctionSrvc is dependency injected
function prepareAppConfig(appFunctionSrvc) {
    var value = {};

    value.name = "Hyalen Moreira";
    value.author = "Gabriela Gontijo";
    value.builtDate = new Date().toDateString();

    appFunctionSrvc("I'll be dependency injected ...");

    return value;
}