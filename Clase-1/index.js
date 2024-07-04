"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myStringVar = `Jose`; //Definir variables string, poniendo myStringVar. (aparecen los metodos)
console.log(myStringVar);
let myNumberVar = 46; //Definir variables numericas, poniendo myNumberVar. (aparecen los metodos)
console.log(myNumberVar);
let myBooleanVar = false; //Definimos una variable booleana (V o F)
console.log(myBooleanVar);
let myNullVar = null; //Definimos variables null
console.log(myNullVar);
let myUndefinedVar; //No hace falta definir que es undefined, por defecto es asi
console.log(myUndefinedVar);
// (CODE .) PARA COMPILAR Y (TSC) PARA CREAR ARCHIVO .JS Y (NODE INDEX.JS) PARA EJECUTAR
//---------------------FUNCIONES-----------------------------------------------------------------------
function myName1(name) {
    return `Hola como estas ${name}`;
}
const myName2 = (name) => {
    return `Estas todo bien ${name} ????`;
};
let myName3;
myName3 = (name) => {
    console.log(name);
};
const isName = myName1(myStringVar);
const isName2 = myName2(myStringVar);
console.log(isName);
console.log(isName2);
myName3(myStringVar);
//---------------------TIPOS--------------------------------------------------------------
//ARRAY
const names = []; //manera de declarar una arreglo poniendo el tipo de arreglo
const name2 = []; //la otra manera de declarar arreglos
names.push(`Josesecito`);
//OBJECT O RECORDS (ESTO ES INTERFACE)
const myObject = {
    name: `Jose`
};
const myObject2 = {};
myObject2.name = `Jose`;
myObject2.age = 46;
//TUPLAS (alt:124 | )
const myObject3 = {};
myObject3.name = `Jose`;
myObject3.age = 46;
//PROMISE
const myPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((res, _rej) => {
        setTimeout(() => {
            res(`Hola Mundo Cruel a la espera de la promesa`);
        }, 2000);
    });
});
myPromise().then((r) => console.log(r));
//COMPUESTOS
const myNewObject = {
    age: 28,
    name: `Milo`
};
