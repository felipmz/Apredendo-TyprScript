class pessoal {

    //tipagem dos atributos
    private nome:string = "";
    private altura:number = 0;
    private nasci:string = "";
    private idade:number = 0;

    constructor (nome:string,altu:number,nasc:string,idade:number){
        this.nome = nome;
        this.altura = altu;
        this.nasci = nasc;
        this.idade = idade;

        console.log(
            `nome: ${nome}
             altura: ${altu}
             nascionalidade: ${nasc}
             idade: ${idade}
            `);
    }

    //setters
    public set nomee(n:string){
        this.nome = n;
    }

    public set altu(a:number){
        this.altura = a;
    }

    public set nasc(n:string){
        this.nasci = n;
    }

    public set idad(i:number){
        this.idade = i;
    }

    //getters
    public get no():string{
        return this.nome;
    }

    public get alt():number{
        return this.altu;
    }

    public get nasc():string{
        return this.nasci;
    }

    public get ida():number{
        return this.idade;
    }
}

const p1 = new pessoal("Felipe",1.80,"Brasil",20);

p1.nomee="pedro";

//const p2 = new pessoal("Emy",1.55,"Brasil",20);

console.log(p1.no);


