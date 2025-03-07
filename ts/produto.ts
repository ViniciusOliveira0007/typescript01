namespace loja{
    export class Produto{
        private _nome:string;
        private _preco:number;
        private _taxa:number;




        get nome(){
            return this. _nome;
        }

        set nome(nome:string){
            this._nome =nome;
        }

        get preco(){
            return this. _preco;
        }

        set preco(preco:number){
            this._preco = preco;
        }

        get taxa(){
            return this. _taxa;
        }

        set taxa(taxa:number){
            this._taxa = taxa;
        }



        public CalcularPrecoFinal():number {
            return (this.taxa/100)*this.preco + this.preco; 
        }






    }

    
}