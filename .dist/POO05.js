"use strict";
class pessoal {
    constructor(nome, altu, nasc, idade) {
        //tipagem dos atributos
        this.nome = "";
        this.altura = 0;
        this.nasci = "";
        this.idade = 0;
        this.nome = nome;
        this.altura = altu;
        this.nasci = nasc;
        this.idade = idade;
        console.log(`nome: ${nome}
             altura: ${altu}
             nascionalidade: ${nasc}
             idade: ${idade}
            `);
    }
    //setters
    set nomee(n) {
        this.nome = n;
    }
    set altu(a) {
        this.altura = a;
    }
    set nasc(n) {
        this.nasci = n;
    }
    set idad(i) {
        this.idade = i;
    }
    //getters
    get no() {
        return this.nome;
    }
    get alt() {
        return this.altu;
    }
    get nasc() {
        return this.nasci;
    }
    get ida() {
        return this.idade;
    }
}
const p1 = new pessoal("Felipe", 1.80, "Brasil", 20);
p1.nomee = "pedro";
//const p2 = new pessoal("Emy",1.55,"Brasil",20);
console.log(p1.no);
