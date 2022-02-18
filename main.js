"use strict";
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
})();
(() => {
    ;
    ;
    class Mutant {
        constructor() {
            this.age = 12;
            this.name = "pedrito";
            this.realName = "wotan";
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
        ;
    }
    ;
})();
(() => {
    const client1 = {
        name: 'Pedro',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottwa',
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 125,
            zip: 'KY2 SUD1',
            city: 'Ottwa',
        }
    };
})();
(() => {
    const client1 = {
        name: 'Pedro',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottwa',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 125,
            zip: 'KY2 SUD1',
            city: 'Ottwa',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunctions;
    addNumbersFunctions = (a, b) => {
        return 10;
    };
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = "Pedro";
        this.edad = 30;
        this.sexo = "Si gracias";
        this.estadoCivil = "es complicado";
    }
    imprimirBio() {
        return this.nombre;
    }
}
//# sourceMappingURL=main.js.map