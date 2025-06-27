"use strict";
let dados = {
    nome: "Felipe",
    idade: 25,
    status: "A",
    ola: () => { console.log("Ola mundo"); },
    deFora: (numP, numS) => {
        if (numP > numS) {
            console.log("O numero" + numP + "é maior que " + numS);
        }
        else {
            console.log("O numero " + numP + "é maior que o " + numS);
        }
    }
};
dados.nome = "maria";
dados.deFora(2, 3);
dados.ola();
//console.log(typeof(dados));
//console.log(dados);
