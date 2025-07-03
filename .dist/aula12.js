"use strict";
function login(nome, senha) {
    if (nome == "felipe" && senha == "123b") {
        console.log("acesso liberado !");
    }
    else {
        console.log("acesso negado!");
    }
}
login("felipe", "123b");
console.log(login);
function soma(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }
}
console.log("O maior : ");
console.log(soma(2, 4));
