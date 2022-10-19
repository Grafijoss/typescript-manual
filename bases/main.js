"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push('hola');
stringArray.push(10);
function getArrayGeneric(items) {
    return new Array().concat(items);
}
let numberArrayGeneric = getArrayGeneric([5, 10, 15, 20]);
let stringArrayGeneric = getArrayGeneric(['Cats', 'Dogs', 'Birds']);
function identity(value, message) {
    console.log(message);
    return value;
}
identity('Hola', 'Jose');
identity('Hola', 'Jose');
function identity2(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') {
        result = value + value;
    }
    else if (typeof value === 'string') {
        result = value + value;
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
identity2(5, 'Jose');
identity2('5', 'Jose');
const identityObj = {
    value: 5,
    message: 'Hola'
};
const identityObj2 = {
    value: '5',
    message: 'Hola'
};
const process = (value, message) => {
    console.log(message);
    return value;
};
const processor = process;
class processIdentityClass {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
    process() {
        return this.value;
    }
}
class processIdentityClassNoInterface {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
    process() {
        return this.value;
    }
}
//# sourceMappingURL=main.js.map