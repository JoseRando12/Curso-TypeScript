"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function SetAge(age) {
    return function (constructor) {
        return class extends constructor {
            constructor(...arhs) {
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
//console.log(getUser.age);
function ValidateAge(age) {
    return function (target, propName) {
        let assignedAge = target[propName];
        Object.defineProperty(target, propName, {
            set: (newAge) => {
                if (newAge < age) {
                    throw new Error("Debe ser mayor o igual a 18 años!!");
                }
                assignedAge = newAge;
            },
            get: () => assignedAge,
        });
    };
}
class Person2 {
    constructor() {
        this.age = 28;
    }
}
__decorate([
    ValidateAge(18),
    __metadata("design:type", Number)
], Person2.prototype, "age", void 0);
const newPerson = new Person2();
console.log(newPerson.age);
newPerson.age = 20;
console.log(newPerson.age);
// llamar asi desde el prompt
// tsc
//node dist/simplesdecorators.js
