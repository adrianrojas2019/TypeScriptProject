"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var name = 'Adrian';
//tsc ./Test/basic.ts 
console.log("Hi ".concat(name));
var a = 10;
a = 20;
var x = 10;
var num1 = 100;
var myName = 'Adrian';
var learningTypeScript = true;
var y;
console.log(y);
// arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1[1]);
// tuple
var tuple1;
tuple1 = [10, 'Hello'];
//this is not allowed
//tuple1 = ['hello', 10]
console.log(tuple1[1].substring(1));
// Enum
var Color;
(function (Color) {
    Color[Color["red"] = 4] = "red";
    Color[Color["black"] = 10] = "black";
    Color[Color["blue"] = 12] = "blue";
})(Color || (Color = {}));
/* let c: Color = Color.black
console.log(c) */
var colorName = Color[10];
console.log(colorName);
// any
var anyVal;
anyVal = 10;
anyVal = 'Hello';
anyVal = true;
// functions
function hello() {
    console.log('This is for testing');
}
hello();
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    //if (num2)
    return num1 + num2;
    //else
    //return num1
}
console.log(sum(3));
function getEmployeeDetails(empDetails) {
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);
}
getEmployeeDetails({
    firstName: 'Adrian',
    lastName: 'Rojas',
    ID: 1941
});
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.hello = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Adrian');
console.log(emp1.employeeName);
console.log(emp1.hello());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.greet = function () {
        console.log("Hello from manager ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var manager1 = new Manager('John');
console.log(manager1.employeeName);
manager1.hello();
manager1.greet();
