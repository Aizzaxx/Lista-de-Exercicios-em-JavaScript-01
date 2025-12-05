 var base = parseFloat(prompt("Digite o valor da base (cateto adjacente):"));
    var altura = parseFloat(prompt("Digite o valor da altura (cateto oposto):"));
    var hipotenusa = Math.sqrt((base * base) + (altura * altura));
    alert("A hipotenusa do triângulo é: " + hipotenusa.toFixed(2));


