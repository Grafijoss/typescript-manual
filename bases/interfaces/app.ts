// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean
  velocidadMaxima: number
  acelerar: () => void
}

const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// conducirBatimovil(batimovil)

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason = {
  reir: true,
  comer:true,
  llorar:false
}

interface Guason {
  reir?: boolean,
  comer?:boolean,
  llorar?:boolean
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

// reir(guason);


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
  (a: string[]): number;
}

let ciudadGotica:CiudadGotica  = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Persona {
  nombre: string
  edad: string
  sexo: string
  estadoCivil: string
  imprimirBio(): void 
}

class Persona implements Persona {
  public nombre: string;
  public edad: string;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio(){} 
}