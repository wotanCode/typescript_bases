"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
