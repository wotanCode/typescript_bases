"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman }); //asi mostramos que tipo de variable es mas su valor
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
