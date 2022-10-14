export const printObject = (argumento:any):void => {
    console.log(argumento)
}

export function genericFuntion<T>( argument: T):T {
    return argument
}

export const genericFunctionArrow = <T>(argument:T):T => argument