abstract class Animal{
    private temPelo: boolean = false;
    private peso: number = 0;
    private mamifero:boolean = false;

    constructor (pelo:boolean,peso:number,mami:boolean){
        this.temPelo = pelo;
        this.peso = peso;
        this.mamifero = mami;
    }

    public get temPolo():boolean{
        return this.temPolo;
    }
    public get pesa():number{
        return this.peso;
    }
    public get mamife():boolean{
        return this.mamifero;
    }

     public set tp(p:boolean){
        this.temPelo = p;
    }
     public set pesa(pe:number){
        this.peso = pe;
    }
     public set mamife(ma:boolean){
        this.mamifero = ma;
    }
}

class Ave extends Animal{
    private tamAsa:number = 0;
    private corBico:string = "";


    constructor (temasa:number,corbico:string,pelo:boolean,peso:number,mami:boolean){

        super(pelo,peso,mami);
        this.tamAsa = temasa;
        this.corBico = corbico;

    }

     public set teamA(tam:number){
        this.tamAsa = tam;
    }
     public set corBic(cb:string){
        this.corBico = cb;
     }

      public get tamAs():number{
        return this.tamAsa;
    }
      public get CorBi():string{
        return this.corBico;
    }

}

class Canino extends Animal implements cursos{
    private domestico: boolean = false;
    private tmaDente: number = 0;

    nome="pedro";
    duracaoMin=12;
    quantAulas=34;
    calcular (n1:number,n2:number):number{
    return n1 + n2
    }

}

const a1 = new Ave(2,"red",false,23,false);



//const p1 = new Animal(false,34,false);