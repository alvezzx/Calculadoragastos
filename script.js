// Função para calcular a economia
function calcularEconomia() {
    var ganhos = parseFloat(document.getElementById("ganhos").value);
    var despesas = parseFloat(document.getElementById("despesas").value);
    var resultado = document.getElementById("resultado");

    // Verifica se os valores inseridos são válidos
    if (isNaN(ganhos) || isNaN(despesas)) {
        resultado.textContent = "Por favor, insira valores válidos.";
    } else {
        var economia = ganhos - despesas;
        resultado.textContent = "Você pode economizar: R$" + economia.toFixed(2);
    }
}

// Função da Mini IA (respostas simples para perguntas sobre finanças)
function responderPergunta() {
    var pergunta = document.getElementById("pergunta").value.toLowerCase();
    var resposta = document.getElementById("resposta");

    // Respostas para algumas perguntas comuns sobre finanças
    if (pergunta.includes("quanto economizar")) {
        resposta.textContent = "Para economizar, tente cortar gastos desnecessários como lazer e alimentação fora de casa!";
    } else if (pergunta.includes("como economizar")) {
        resposta.textContent = "Uma forma de economizar é criar um orçamento mensal e controlar seus gastos fixos e variáveis.";
    } else if (pergunta.includes("investir")) {
        resposta.textContent = "Investir é uma boa forma de fazer seu dinheiro crescer. Comece com investimentos de baixo risco, como a poupança ou CDBs.";
    } else if (pergunta.includes("gastos com alimentação")) {
        resposta.textContent = "Você pode reduzir os gastos com alimentação ao planejar suas refeições e evitar comprar comida pronta.";
    } else if (pergunta.includes("dívidas")) {
        resposta.textContent = "Para quitar suas dívidas, tente priorizar as de maiores juros e fazer um pagamento parcelado de acordo com suas possibilidades.";
    } else {
        resposta.textContent = "Desculpe, não entendi sua pergunta. Tente reformulá-la.";
    }
}
