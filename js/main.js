"use strict";
var loja;
(function (loja) {
    var _a;
    let nome = document.getElementById("nomeProduto");
    const preco = document.getElementById("PrecoProduto");
    const taxa = document.getElementById("TaxaProduto");
    (_a = document.getElementById('btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        // p.nome = nome.value; 
        let p = new loja.Produto();
        p.nome = nome.value;
        p.preco = parseFloat(preco.value);
        p.taxa = parseFloat(taxa.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("taxa").textContent = p.taxa.toString();
        document.getElementById("valorFinal").textContent = p.CalcularPrecoFinal().toString();
        let display = document.getElementById("display");
        display.innerHTML = `
        
        <h2>         ${p.CalcularPrecoFinal()},00 reais você irá gastar</h2>
        `;
    });
})(loja || (loja = {}));
