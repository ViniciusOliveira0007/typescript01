"use strict";
var loja;
(function (loja) {
    class Produto {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        get taxa() {
            return this._taxa;
        }
        set taxa(taxa) {
            this._taxa = taxa;
        }
        CalcularPrecoFinal() {
            return (this.taxa / 100) * this.preco + this.preco;
        }
    }
    loja.Produto = Produto;
})(loja || (loja = {}));
