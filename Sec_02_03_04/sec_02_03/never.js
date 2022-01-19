"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("auxilio!");
    console.log("hola mundo");
})();
