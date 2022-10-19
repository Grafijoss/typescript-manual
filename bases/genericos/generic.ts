
function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

let numberArray = getArray([5,10,15,20])
let stringArray = getArray(['Cats', 'Dogs', 'Birds'])

numberArray.push('hola')
stringArray.push(10)

//* se puede enviar cualquier tipo de  elemento en el arreglo
//* por que any acepta cualquier tipo

//? Una sola variable generica
function getArrayGeneric<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

//* El tipo generico se infiere o también se puede asignar
let numberArrayGeneric = getArrayGeneric([5,10,15,20])
let stringArrayGeneric = getArrayGeneric<string>(['Cats', 'Dogs', 'Birds'])

//! ERROR: numberArrayGeneric.push('hola')
//! ERROR: stringArrayGeneric.push(10)
//! Los tipos genericos infieren el tipo y no permiten agregar de otro

//? Uso de varias variables de tipo

//* La funci{on va a recibir dos argumetos
//* va a retornar un tipo <T>
function identity<T, U>(value: T, message: U): T {
    console.log(message)
    return value
}

//* Se puede asignar un tipo a los parametros
//* o se puede enviar sin tipo para que typescript lo infiera
identity<string, string>('Hola', 'Jose')
identity('Hola', 'Jose')


//? Métodos y propiedades de un tipo genérico

// function identity2<T, U>(value: T, message: U): T {
//!    let result: T = value + value
//!    esto genera un error por que <T> puede ser de cualquier tipo
//     console.log(message)
//     return value
// }

//? Extends

type ValidTypes = string | number

// function identity2<T extends ValidTypes, U>(value: T, message: U): T {
//!    let result: T = value + value
//!
//     console.log(message)
//     return value
// }

function identity2<T extends ValidTypes, U>(value: T, message: U): ValidTypes {
    
    let result: ValidTypes = ''
    let typeValue: string = typeof value
    
    if(typeof value === 'number') {
        result = value + value //* suma
    } else if (typeof value === 'string') {
        result = value + value //* concatenación
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`)

    return result
}

identity2(5, 'Jose')
identity2('5', 'Jose')

//? Genericos con interfaces y clases

interface Identitiy<T, U> {
    value: T,
    message: U
}

const identityObj: Identitiy<number, string> = {
    value: 5,
    message: 'Hola'
}

const identityObj2: Identitiy<string, string> = {
    value: '5',
    message: 'Hola'
}

//? Función generica

interface ProcessIdentity<T, U> {
    (value: T, message: U): T
}

// const processIdentity: ProcessIdentity<number, string> = (value, message) => {
//     console.log(message)
//     return value
// }

const process = (value: any, message: any) => {
    console.log(message)
    return value
}

const processor: ProcessIdentity<number, string> = process

//* process('string', 'string') process admite cualquier tipo
//! processor('string', 'string') processor solo admite <number, string>


//? Interfaz generica como un tipo clase

interface ProcessIdentity2<T,U> {
    value: T
    message: U
    process(): T
}

class processIdentityClass<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    
    constructor (value: X, message: Y) {
        this.value = value
        this.message = message
    }

    process(): X {
        return this.value
    }
}


//*  const process2 = new processIdentityClass('Hola', 'Joss') infiere los tipos
//! const process2 = new processIdentityClass<number, string>('Hola', 'Joss') se le esta asignando los tipos

class processIdentityClassNoInterface<X, Y> {
    value: X;
    message: Y;
    
    constructor (value: X, message: Y) {
        this.value = value
        this.message = message
    }

    process(): X {
        return this.value
    }
}

//*  const process2 = new processIdentityClassNoInterface('Hola', 'Joss') infiere los tipos
//! const process2 = new processIdentityClassNoInterface<number, string>('Hola', 'Joss') se le esta asignando los tipos


