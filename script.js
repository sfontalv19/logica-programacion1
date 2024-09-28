function numeros() {
    var num1 = parseFloat(prompt("Por favor, ingrese un número:"));
    var num2 = parseFloat(prompt("Por favor, ingrese un número:"));
    var num3 = parseFloat(prompt("Por favor, ingrese un número:"));

    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales");
    } else {
        var mayor = Math.max(num1, num2, num3);
        var menor = Math.min(num1, num2, num3);
        var medio = num1 + num2 + num3 - mayor - menor;

        console.log(mayor + " es el mayor");
        console.log(menor + " es el menor");
        console.log(medio + " es el del medio");
    }
}

numeros();