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

function readonly (isWritable: boolean = true):Function {
  return function (target: any, propertykey: string,) {
    //console.log({target,propertykey,descriptor})
    const descriptor:PropertyDescriptor = {
      get(){
        console.log(this, 'getter')
        return 'pedrito'
      },
      set(this, val){
        //console.log(this, val)
        Object.defineProperty(this, propertykey, {
          value: val,
          writable: !isWritable,
          enumerable: false,

        })
      },
    }
    return descriptor;
  }
}


@bloquearPrototipo
@printToConsonleConditional( true )

export class Pokemon {

  @readonly(false)

  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}
@CheckValidPokemonId()
  savePokemonToDB( id:number){
    console.log(`Pokemon guardado a la DB ${id}`)
  }

}