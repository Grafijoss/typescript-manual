import { genericFunctionArrow } from './generics/generics';
import { Hero, Villan } from './interfaces' 
const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}


console.log(genericFunctionArrow<Hero>(deadpool).realName)
console.log(genericFunctionArrow<Villan>(deadpool).dangerLevel)
