let numerosM:number[] =[23,45,63];
let numeral:Array<number|string>=[12,34,54,34];

 numeral.push(34);// bota no final
 numeral.unshift(12);// bota no começo
 numeral.pop();//tira o utimo elemento do array
 numeral.shift;//tira o primeriro elemrnto do array 

 let numero_ro:ReadonlyArray<number>=[12,23,4,5,6];


 console.log(numero_ro);
 console.log(numeral);