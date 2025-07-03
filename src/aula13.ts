// tamplate string
// ao concatenar string para não fazer : nome + " " + nome2 ...
const str = "ola mundo";
const str1 = "de quem ";
const str2 = " e tchau.";

const frase = 'ede ${str} ${str1} ${str2}';

function novosUser(user1:string,user2:string,user3?:number):void{
    console.log(`user1: ${user1}, user2: ${user2}, user3: ${user3}`);
}   
novosUser("felipe","marcos");
novosUser("felipe","marcos",2);