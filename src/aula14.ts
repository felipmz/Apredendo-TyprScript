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
const lista = (ListNums:number[]= numList):number =>{
    let soma:number = 0;
    numList.forEach(element => {
        soma+= element;
    });
    return soma;
}

const numList:number[]= [1,1,1,1,1]; 
console.log(lista(numList));
