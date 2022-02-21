function printToConsole( constructor: Function ) {
  console.log( constructor )
}

const printToConsonleConditional = (print: boolean = false):Function =>{
  if (print){
    return printToConsole;
  } else {
    return () => {};
  }
}

const bloquearPrototipo = function( constructor: Function ) {
  Object.seal( constructor )
  Object.seal( constructor.prototype )
}

function CheckValidPokemonId(){
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ){
    //console.log({target,propertyKey,descriptor})
    //descriptor.value = () => console.log('hola conchale');
    const originalMethod = descriptor.value
    descriptor.value = (id:number) => {
      if (id < 1 || id > 800) {
        return console.error('EL id del pokemon debe estar entre 1 y 800');
      } else {
        return originalMethod(id);
      }
    }
  }
}


@bloquearPrototipo
@printToConsonleConditional( true )

export class Pokemon {

  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}
@CheckValidPokemonId()
  savePokemonToDB( id:number){
    console.log(`Pokemon guardado a la DB ${id}`)
  }

}