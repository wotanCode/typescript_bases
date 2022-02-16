"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No lastname error'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map