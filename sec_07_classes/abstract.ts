(()=>{

  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,
    ){}
  }

  class XmeNS extends Mutante {
    salvarMundo(){
      return 'Mundo a salvo!';
    }
  }
  class Villian extends Mutante {
    conquistarMundo(){
      return 'mundo COnquistado!';
    }
  }

  const wolverine = new XmeNS('wolverinE', 'logaN');
  const magneto = new Villian('Magneto', 'Magnus');

  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

  const printName = ( character: Mutante ) => {
    console.log( character.realName )
  }

  printName ( wolverine )

})()