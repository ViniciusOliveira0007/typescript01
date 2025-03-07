"use strict";
var loja;
(function (loja) {
    var _a;
    let p = new loja.Produto();
    p.nome = document.getElementById("nomeProduto").textContent;
    p.preco = 100;
    p.taxa = 20;
    let n = document.getElementById("nomeProduto");
    ;
    const no = n.value;
    (_a = document.getElementById('btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', clicar);
    function clicar() {
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("taxa").textContent = p.taxa.toString();
        document.getElementById("valorFinal").textContent = p.CalcularPrecoFinal().toString();
        let display = document.getElementById("display");
        display.innerHTML = `
        <h2> ${no}<h2>
        <h2>         ${p.CalcularPrecoFinal()},00 reais você irá gastar</h2>
        `;
    }
    ;
})(loja || (loja = {}));
