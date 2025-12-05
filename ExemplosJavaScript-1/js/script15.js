var peso = parseFloat(prompt("Digite seu peso (kg):"));
var altura = parseFloat(prompt("Digite sua altura (m):"));
var imc = peso / (altura * altura);
alert("Seu IMC é: " + imc.toFixed(2));