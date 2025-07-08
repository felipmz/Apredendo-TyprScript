"use strict";
class Animal {
    constructor(pelo, peso, mami) {
        this.temPelo = false;
        this.peso = 0;
        this.mamifero = false;
        this.temPelo = pelo;
        this.peso = peso;
        this.mamifero = mami;
    }
    get temPolo() {
        return this.temPolo;
    }
    get pesa() {
        return this.peso;
    }
    get mamife() {
        return this.mamifero;
    }
    set tp(p) {
        this.temPelo = p;
    }
    set pesa(pe) {
        this.peso = pe;
    }
    set mamife(ma) {
        this.mamifero = ma;
    }
}
class Ave extends Animal {
    constructor(temasa, corbico, pelo, peso, mami) {
        super(pelo, peso, mami);
        this.tamAsa = 0;
        this.corBico = "";
        this.tamAsa = temasa;
        this.corBico = corbico;
    }
    set teamA(tam) {
        this.tamAsa = tam;
    }
    set corBic(cb) {
        this.corBico = cb;
    }
    get tamAs() {
        return this.tamAsa;
    }
    get CorBi() {
        return this.corBico;
    }
}
class Canino extends Animal {
    constructor() {
        super(...arguments);
        this.domestico = false;
        this.tmaDente = 0;
    }
}
const a1 = new Ave(2, "red", false, 23, false);
//const p1 = new Animal(false,34,false);
