function executarSistema() {

    //dados de entrada
    const nome = document.getElementById("inputNome").Value;
    const idade = parseInt(document.getElementById("inputIdade").Value);
    const valor = parseFloat(document.getElementById("inputValor").Value);
    const cupom = document.getElementById("inputCupom").Value === "true";

    //dados de saida
    const msg = document.getElementById("mensagem-autorizacao");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    //validação para campos de vazios
    if (!nome || isNaN(idade) || isNaN(valor)) {
        alert("Por favor, preencha todos os campos!");
        return;

    }

    //regra de negocio
    if (idade >= 16) {
        msg.innerText = `Venda autorizada: ${nome}`;
        msg.style.color = "#00ff88";

        //desconto
        let valorfinal = (valor > 500 || cupom) ? valor * 0.85 : valor;

        //estoque
        let estoque = ["Placa de video", "processdor", "Memoria RAM"];
        lista.innerHTML = ""; //limpar a lista anterior
        

    }





}