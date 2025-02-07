"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function SetAge(age) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super();
                this.age = age;
            }
        };
    };
}
let Person = class Person {
};
Person = __decorate([
    SetAge(28)
], Person);
const getUser = new Person();
console.log(getUser.age);
