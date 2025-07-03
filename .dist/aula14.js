"use strict";
//função anonima/Arrow Function
// 
/*const nomefunc=(txt?:string):void=>{
    console.log(txt);
}

nomefunc("Ola caras");
nomefunc("vão embora !");
nomefunc("Porque sim.");

const somad= (n1:number,n2:number):number=>{
    return n1 + n2;
}

console.log(somad(2,3));*/


//soma ods numeros dos arrays
const lista = (ListNums = numList) => {
    let soma = 0;
    numList.forEach(element => {
        soma += element;
    });
    return soma;
};
const numList = [1, 1, 1, 1, 1];
console.log(lista(numList));
