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
        })
        .catch(erro => {
            console.error("Erro:", erro);
        });

});