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
//# sourceMappingURL=main.js.map