(() => {

  const batman:string = 'Batman';
  const linternaVerde:string = "Linterna's Verde";
  const volcanNegro:string = `Heroe: Volcan Negro`;

  const abc = 123;

  console.log(batman.toUpperCase());

  console.log(`I'm ${batman}, ${abc}`);

  console.log(batman[10]?.toUpperCase() || 'No esta presente') // NULL CHECK EL SIMBOLO ?
  

})()