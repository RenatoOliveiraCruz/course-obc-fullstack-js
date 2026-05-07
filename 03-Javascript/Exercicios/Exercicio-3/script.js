let valorMetro = parseFloat(prompt("Digite o valor em metro:"));

switch (valorMetro) {
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