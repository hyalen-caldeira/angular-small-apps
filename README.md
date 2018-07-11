# angular-small-apps

Objective
=========

To use AngularJS basic functionalities

Evaluation Areas
================
RESTful endpoints, Design Patterns, HTML and Bootstrap

Requirements
============
### Task 1) ###
Make some basic examples creating AngularJS small apps. The goal is to have the AngularJS MVC pattern implemented.

### Task 2) ###
Create a small app where is possible to perform CRUD operations. The app should use Bootstrap, http-server, json-server and a more advanced AngularJS features, like $http, Service, 

#### Tools ####
* npm install http-server -g
  * After install, verify if everything is ok typing `http-server` on command line
  * You must run the `http-server` app from your main project folder to have your application working as a server. This way you don't have to specify `index.html` in the URL because that is  the default file served when a directory is accessed.
* npm install json-server -g
  * After install, verify if everything is ok typing `json-server` on command line
* Use the https://api.randomuser.me/ to randomly create json examples. This website is a fake user API that returns a user object with some random fake (but real-looking) data
* Bootstrap - http://getbootstrap.com

Tech Stack
==========
* node js
* http-server
* json-server
  * http://localhost:3000/contacts or http://localhost:3000/contacts/1
* AngularJS
  * angular.module
    * controller
    * constant
    * value
    * factory
    * provider
  * nesteed controller
  * scope
  * service
  * ng-model, ng-select, ng-bind, ng-controller, ng-repeat, ng-click, ng-show, ng-hide, ng-class, ng-include, ng-style, ng-table, ng-if
* Bootstrap
