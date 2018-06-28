var app = angular.module("todoApp", []);
app.controller("todoController", todoController);

function todoController() {
    this.editMode = false;

    this.todos = [
        "Do Angular Test",
        "Visit hyalen.us Web Site",
        "Study Algorithms"
    ];

    this.addNewTask = function() {
        this.todos.push(this.newTask);
        this.newTask = "";
    }

    this.onEditButtonClick = function() {
        this.editMode = !this.editMode;
    }

    this.onDeleteButtonClick = function(index) {
        this.todos.splice(index, 1);
    }
}