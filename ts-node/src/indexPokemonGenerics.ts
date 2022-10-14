import { getPokemon } from './generics/get-pokemon';
getPokemon(2)
    .then( resp => console.log(resp.name))
    .catch(error => console.log(error))
    .finally(() => console.log('Fin de Pokemon'))