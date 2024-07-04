import "reflect-metadata";

const titleCaseRX = /^\s*([A-Z]\w*\s*)*$/;

function Validate(){
    return function(
        this: unknown,
        target: Object,
        key: string,
        descriptor: PropertyDescriptor
    ){
        let originalValue = descriptor.value
        descriptor.value = (...args: any[])=>{
            const index: any = Reflect.getMetadata("validate:name", target)
            const value: string = args[index]
            if (!titleCaseRX.test(value)){
                throw new Error ('El nombre no es valido')
            }
            originalValue.apply(this,args);
        }
    } 
}

function TitleCase() {
    return function(target:Object, key:string, index:number){
        Reflect.defineMetadata("validate:name", index, target);
    }
}


class User {
    @Validate()
    public myInfo(@TitleCase()name:string, age:number){
        console.log({
            name,
            age,
        })
    }
}

const myUser = new User().myInfo('Rodrigo', 28);

//EJECUTAR
//tsc
//node dist/with-reflect-metadata.js
