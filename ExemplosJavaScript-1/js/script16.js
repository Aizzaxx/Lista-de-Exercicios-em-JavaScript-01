var produto = prompt("Digite o nome do produto:");
var preco = parseFloat(prompt("Digite o preço do produto:"));
var desconto = preco * 0.10;
var precoFinal = preco - desconto;
alert("Produto: " + produto + "\nPreço com desconto: R$ " + precoFinal.toFixed(2));