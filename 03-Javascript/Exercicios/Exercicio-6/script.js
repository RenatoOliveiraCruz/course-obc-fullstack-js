let question;
let sum;
do {
    question = prompt("Deseja entrar na sala de multiplicação? (yes/no)");
    switch (question.toLowerCase()) {
        case "yes":
            alert("Bem-vindo à sala de multiplicação!");
            let numero = parseFloat(prompt("Digite um número para ver sua tabuada (1-20):"));

        for (let i = 1; i <= 20; i++) {
            let resultado = numero * i;
            sum += resultado;
            alert(numero + " x " + i + " = " + resultado);
            alert("Soma acumulada de todos os resultados : " + sum);
        }; 
            break;
        case "no":
            alert("Você optou por não entrar na sala.");
            break;
        default:
            alert("Resposta inválida, por favor responda com 'yes' ou 'no'.");
    }
} while (question.toLowerCase() !== "no");
