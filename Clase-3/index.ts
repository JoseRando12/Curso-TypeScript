interface myGenericInterface<T,U> {     //DECLARO INTERFACE GENERICA
    myGenericType: T | U;
}

const example : myGenericInterface<string,number|boolean> = {
    myGenericType : true
}

function getValue<T>(value:T) {    //DEFINIMOS UNA FUNCION GENERICA
    console.log(value)
}
getValue<number>(28)

const getValue2 = <T>(value:T) => {    //DEFINIMOS UNA FUNCION FLECHA
    console.log(value)
}

type myGenericTypeInterface<T,U> = {     //DECLARO TIPO (LA DIFERENCIA CON LA INTERFACE ES QUE ACA HAY QUE =)
    myGenericType: T | U;
}


class genericClass<T> {
    value!: T
    constructor(value:{new(): T}){
        this.value = new value();
    }
}

class laura {
    public name : string = `Milo`;
    public age: number = 11;
}

class jose {
    public nameLaura : string = `Gael`;
    public ageLaura: number = 8;
}


class Greet extends genericClass<laura>{
    constructor(){
        super(laura)
    }

    public greet() : void{
        console.log(`Hello, ${this.value.name}`);
    } 
}
new Greet().greet