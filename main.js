"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L Jackson",
        ironman: "Robert Downey",
        vision: "pual bettany",
        activo: true,
        poder: 1500.123123,
    };
    const printAvenger = (_a) => {
        var { ironman, vision, nick } = _a, resto = __rest(_a, ["ironman", "vision", "nick"]);
        console.log(vision, resto);
    };
    printAvenger(avengers);
})();
(() => {
    let a = "SOY UN LET";
    const b = "soy una constante";
    console.log(a);
    console.log(b);
    const numbers = {
        a: 1,
        b: 2,
    };
    numbers.a = 100,
        console.log(numbers.a);
})();
//# sourceMappingURL=main.js.map