"use strict";
//trabalhar com numero inlimitado de parametros
function maisum(...ns) {
    let somar = 0;
    ns.forEach((elements) => {
        somar += elements;
    });
    return somar;
}
console.log(maisum(2, 3, 5, 6));
