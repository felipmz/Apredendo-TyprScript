let valor:number;
let avalor:string;
let bvalor:unknown;

avalor = "56";
bvalor =10;

//valor =<number> bvalor;
valor = Number.parseFloat(avalor);
bvalor = valor.toString();

console.log(typeof(bvalor));
console.log(bvalor);