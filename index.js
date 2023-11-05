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
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Student Management System\n");
//operations enroll, view balance, pay tuition fees, show status
var institude = /** @class */ (function () {
    function institude(insName) {
        this.students = [];
        this.insName = insName;
    }
    //method to register student
    institude.prototype.addStudent = function (objStuent) {
        this.students.push(objStuent);
    };
    return institude;
}());
var Course = /** @class */ (function () {
    function Course(course) {
        this.course = course;
    }
    return Course;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, enrolled, balance, course, fee) {
        var _this = _super.call(this, course) || this;
        _this.id = id || _this.generateUniqueId();
        _this.name = name;
        _this.enrolled = enrolled;
        _this.fee = fee;
        _this.balance = balance;
        return _this;
    }
    // Function to generate a 5-digit unique student ID
    Student.prototype.generateUniqueId = function () {
        var randomId = Math.floor(10000 + Math.random() * 90000);
        return randomId.toString();
    };
    return Student;
}(Course));
var objinstitude1 = new institude("Piaic Karachi");
var objinstitude2 = new institude("Piaic Islamabad");
var objStud1 = new Student("", "Ali", true, "non", "Quater 1", 4500);
var objStud2 = new Student("", "Asma", true, "500", "Quater 2", 4000);
var objStud3 = new Student("", "Chaman", true, "non", "Quater 3", 4500);
var objStud4 = new Student("", "Mike", true, "1000", "Quater 4", 3500);
objinstitude1.addStudent(objStud1);
objinstitude1.addStudent(objStud2);
objinstitude1.addStudent(objStud3);
objinstitude2.addStudent(objStud4);
console.log(objinstitude1);
console.log(objinstitude2);
