// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto{
  encender: boolean;
  velocidadMaxima: number
  acelear(): void;
}


const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface GuasonI{
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason:GuasonI = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:GuasonI ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface ciudadGoticaI{
  ( ciudadanos:string[] ): number;
}

const ciudadGotica:ciudadGoticaI = ( ciudadanos:string[] ):number => {
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

interface PersonaI{
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;

  imprimirBio(): string;
}

class Persona implements PersonaI {
  public nombre = "Pedro";
  public edad = 30;
  public sexo = "Si gracias";
  public estadoCivil = "es complicado"
  imprimirBio(){
    return this.nombre;
  }
}