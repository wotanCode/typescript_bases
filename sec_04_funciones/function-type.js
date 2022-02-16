"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //Funciones
    //let myFunction //todos los casos
    //let myFunction: (y:number, z:number) => number; //caso numero
    //let myFunction: (z:string) => string; //caso string
    let myFunction; //Sin parametro
    //let myFunction: (y:number, z:number) => number;
    //console logs
    // myFunction = 10;
    // console.log(myFunction)
    // myFunction = addNumbers;
    // console.log( myFunction(1,2) );
    // myFunction = greet;
    // console.log( myFunction('Pedrito') );
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map