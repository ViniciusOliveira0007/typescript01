namespace loja{
   
    let p = new Produto();
    p.nome = document.getElementById("nomeProduto").textContent;
    p.preco = 100;
    p.taxa = 20;

    let n =document.getElementById("nomeProduto") as HTMLInputElement;;

    const no = n.value;

   
    document.getElementById('btn')?.addEventListener('click', clicar);
    function clicar() {
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("taxa").textContent = p.taxa.toString();
        document.getElementById("valorFinal").textContent = p.CalcularPrecoFinal().toString();
    

        let display = document.getElementById("display");
        display.innerHTML=`
        <h2> ${no}<h2>
        <h2>         ${p.CalcularPrecoFinal()},00 reais você irá gastar</h2>
        `};
    }

