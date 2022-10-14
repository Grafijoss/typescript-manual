import { printObject, genericFunctionArrow } from './generics/generics';

printObject('Hola')

console.log(genericFunctionArrow(3.14454).toFixed(2))
console.log(genericFunctionArrow('Hola').toUpperCase())
console.log(genericFunctionArrow(new Date).getDate())