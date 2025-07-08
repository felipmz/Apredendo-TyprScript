interface cursos{
    nome:string;
    duracaoMin:number;
    quantAulas:number;
    calcular(n1:number,n2:number):number;
}

let curso1: cursos;

function calcular (n1:number,n2:number):number{
    return n1 + n2
}

curso1={nome:"react",duracaoMin:180,quantAulas:23,calcular (n1:number,n2:number):number{
    return n1 + n2
}};

console.log(curso1);