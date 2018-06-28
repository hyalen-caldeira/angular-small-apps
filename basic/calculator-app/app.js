var app = angular.module("calculatorApp", []);
app.controller("calculatorController", calculatorController);

function calculatorController() {
    this.resultValue = 0;

    this.buttonClicked = function(button) {
        this.selectedOperation = button;
    }

    this.computeResult = function() {
        var valueOne = parseFloat(this.valueOne);
        var valueTwo = parseFloat(this.valueTwo);

        if (this.selectedOperation === '+')
            this.resultValue = valueOne + valueTwo;
        else if (this.selectedOperation === '-')
            this.resultValue = valueOne - valueTwo;
        else if (this.selectedOperation === '*')
            this.resultValue = valueOne * valueTwo;
        else if (this.selectedOperation === '/')
            this.resultValue = valueOne / valueTwo;
    }
}