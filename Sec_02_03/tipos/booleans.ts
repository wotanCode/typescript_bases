(() => {
  let isSuperman:boolean = true;
  let isBatman: boolean = false;

  console.log({ isBatman }) //asi mostramos que tipo de variable es mas su valor

  isSuperman = true && false;

  isSuperman = ( isBatman ) ? true: false;

  console.log({ isSuperman })

})()