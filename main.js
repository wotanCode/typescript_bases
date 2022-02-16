"use strict";
(() => {
    const a = 10;
    let b = 10;
    console.log(a);
})();
function sayHello(msg) {
    console.log(msg);
}
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.123;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villan = ['Omega Rojo', 'Dormamu', 'Duende verde'];
    villan.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isBatman });
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("auxilio!");
    console.log("hola mundo");
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('En problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}, ${abc}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['Dr strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza.flash;
    const fuerzaSuperman = fuerza.superman;
    const fuerzaBatman = fuerza.batman;
    const fuerzaAcuaman = fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No lastname error'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Startk');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
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
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Otro nombre',
        age: 60,
        powers: ['Super Fuerza'],
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    flash = {
        name: 'Clark',
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
})();
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad']
    };
})();
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
    flash = {
        name: 'Clark',
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName);
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
console.log(mystique);
mystique = apocalipsis;
console.log(mystique);
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1]
    };
    console.log(flash);
    console.log(superman);
})();
(() => {
    let myCustomVariable = 'Pedro';
    console.log(typeof myCustomVariable);
    myCustomVariable = 30;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=main.js.map