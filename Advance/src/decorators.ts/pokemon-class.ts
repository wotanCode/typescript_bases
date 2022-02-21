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

@printToConsonleConditional( true )


export class Pokemon {

  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ){}
}