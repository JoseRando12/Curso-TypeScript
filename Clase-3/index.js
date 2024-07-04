"use strict";
const example = {
    myGenericType: true
};
function getValue(value) {
    console.log(value);
}
getValue(28);
const getValue2 = (value) => {
    console.log(value);
};
class genericClass {
    constructor(value) {
        this.value = new value();
    }
}
class laura {
    constructor() {
        this.name = `Milo`;
        this.age = 11;
    }
}
class jose {
    constructor() {
        this.nameLaura = `Gael`;
        this.ageLaura = 8;
    }
}
class Greet extends genericClass {
    constructor() {
        super(laura);
    }
    greet() {
        console.log(`Hello, ${this.value.name}`);
    }
}
new Greet().greet;
