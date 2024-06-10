let mensaje: string = 'hola mundo'
mensaje = 'chanchito feliz'
mensaje = 'chao mundo'

console.log(mensaje)
console.log(typeof [])

/**
 * tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * tipos de TS
 * any (no usarlo)
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * tipos inferidos
 * 
 */

let extincionDinosaurios:number = 76_000_000
let dinosaurioFav:string = 't-rex'
let extintos:boolean = true

let mivariableAny
mivariableAny = 12
mivariableAny = 'cambiando dato any'

function chanchitoFeliz(config:string){
    return config
}

let animals:string[] = ['chanchito','feliz','felipe']
let nums:number[] = [4,4,5,2]
let checks:boolean[]= []
let num2:Array<number> = []

// nums.map( x=> x.)  // el autocompletado sugiere metodos del tipo de dato

// tuplas
let tuplas:[number, string[]] = [1,['jose','juan']]
tuplas.push(12) // error 

// enums
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }
const var1 = Talla.Mediana
console.log(var1)

const enum LoadingState { Idle, Loading, Succes, Error } // optimizar codigo,
const stateSucces = LoadingState.Succes

// objects
type Direccion = {
    numero:number,
    calle:string,
    pais:string
}

type Persona = { 
    readonly id:number,
    nombre:string
    talla: Talla,
    direccion : Direccion
} 

const objecto:Persona = { 
    id : 1,
    nombre : 'Hola mundo',
    talla:Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Mz9 lte3',
        pais: 'Colombia'
    }
}

const arr:Persona[] = []
