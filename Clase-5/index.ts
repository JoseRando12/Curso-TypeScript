type Perro = {
    nombrePerro:string
    edad: number
    ladra: boolean
}

type Gato = {
    nombreGato:string
    edad: number
    trepa: boolean
}

type seleccionAnimal<T extends "perro"|"gato"> = T extends "perro" ? Perro : Gato;


function seleccionAnimal<T extends "perro"|"gato">(animal:seleccionAnimal<T>) {
    console.log(animal)
}

seleccionAnimal<'gato'> ({
    
})