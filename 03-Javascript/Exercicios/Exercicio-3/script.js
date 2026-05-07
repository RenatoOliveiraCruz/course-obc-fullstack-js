let valorMetro = parseFloat(prompt("Digite o valor em metro:"));
const conversao = parseInt(prompt("Escolha a unidade de medida para conversão:\n\n1 - Milímetros\n2 - Centímetros\n3 - Decímetros\n4 - Decâmetros\n5 - Hectômetros\n6 - Quilômetros"));

if (isNaN(valorMetro)) {
    alert("Valor inválido! Por favor, digite um número.");
} else {
switch (conversao) {
    case 1: 
        alert("O valor em milímetros é: " + valorMetro * 1000 + " mm");
        break;
    case 2:
        alert("O valor em centímetros é: " + valorMetro * 100 + " cm");
        break;
    case 3:
        alert("O valor em decímetros é: " + valorMetro * 10 + " dm");
        break;
    case 4:
        alert("O valor em decâmetros é: " + valorMetro / 10 + " dam");
        break;
    case 5:
        alert("O valor em hectômetros é: " + valorMetro / 100 + " hm");
        break;
    case 6:
        alert("O valor em quilômetros é: " + valorMetro / 1000 + " km");
        break;
    default:
        alert("Opção inválida!");
}
}