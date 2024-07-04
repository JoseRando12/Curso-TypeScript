let myStringVar:string = `Jose`    //Definir variables string, poniendo myStringVar. (aparecen los metodos)
console.log(myStringVar)

let myNumberVar:number = 46       //Definir variables numericas, poniendo myNumberVar. (aparecen los metodos)
console.log(myNumberVar)

let myBooleanVar:boolean = false  //Definimos una variable booleana (V o F)
console.log(myBooleanVar)

let myNullVar:null = null         //Definimos variables null
console.log(myNullVar)

let myUndefinedVar:undefined       //No hace falta definir que es undefined, por defecto es asi
console.log(myUndefinedVar)

// (CODE .) PARA COMPILAR Y (TSC) PARA CREAR ARCHIVO .JS Y (NODE INDEX.JS) PARA EJECUTAR

//---------------------FUNCIONES-----------------------------------------------------------------------


function myName1(name:string):string{             // Funcion comun
    return `Hola como estas ${name}`
}

const myName2 = (name:string):string => {         //Funcion Flecha
    return `Estas todo bien ${name} ????`
}

let myName3: (name:string) => void;

myName3 = (name) => {
    console.log(name)
} 

const isName = myName1(myStringVar)
const isName2 = myName2(myStringVar)
console.log(isName)
console.log(isName2)

myName3(myStringVar)

//---------------------TIPOS--------------------------------------------------------------
//ARRAY

const names:string[] = []   //manera de declarar una arreglo poniendo el tipo de arreglo

const name2:Array<string> = []  //la otra manera de declarar arreglos
names.push(`Josesecito`)

//OBJECT O RECORDS (ESTO ES INTERFACE)

const myObject:object = {
    name:`Jose`
}

const myObject2:Record<string,any>={}
    myObject2.name = `Jose`
    myObject2.age = 46

//TUPLAS (alt:124 | )

const myObject3:Record<string,string | number>={}
    myObject3.name = `Jose`
    myObject3.age = 46

//PROMISE

const myPromise = async (): Promise<string> => {
    return await new Promise((res,_rej) =>{
        setTimeout(() =>{
            res(`Hola Mundo Cruel a la espera de la promesa`)
        },2000)
    })
}

myPromise().then ((r) => console.log(r))

//COMPUESTOS

const myNewObject: {
    name:string,
    age:number
} = {
    age:28,
    name:`Milo`
}
