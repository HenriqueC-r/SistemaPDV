const codigo = document.getElementById("codigo");
const produto = document.getElementById("produto");
const valor = document.getElementById("valor");
const estoque = document.getElementById("estoque");
const buscar = document.getElementById("buscar");
const informacoes = document.getElementById("informacoes");
const mensagem = document.getElementById("mensagem");

buscar.addEventListener("click", function () {

    if (codigo.value.trim() === "") {
        informacoes.style.display = "none";
        mensagem.textContent = "❌ O código é obrigatório.";
        codigo.classList.add("erro");
        return;
    }

    mensagem.textContent = "";
    codigo.classList.remove("erro");

    const codigoBarras = codigo.value.trim();

    fetch("api/buscarpdv.php?codigo_barras=" + codigoBarras)
    .then(response => response.json())
    .then(dados => {

        console.log(dados);
        console.log(dados.success);

        if (dados.success) {
            console.log("Entrou no IF");

            informacoes.style.display = "block";

            produto.value = dados.produto.nome;
            valor.value = dados.produto.preco;
            estoque.value = dados.produto.estoque;

            mensagem.textContent = "";

        } else {

            console.log("Entrou no ELSE");

            informacoes.style.display = "none";
            mensagem.textContent = "❌ " + dados.message;

        }

        })
    .catch(erro => {
        console.error("Erro:", erro);
    });

});