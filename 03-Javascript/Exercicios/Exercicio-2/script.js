// EX 01

let motocyclicleSpeed = 299;
let carSpeed = 279;

if (motocyclicleSpeed > carSpeed) {
    console.log("A motocicleta é mais rápida que o carro");
} else if (carSpeed > motocyclicleSpeed) {
    console.log("O carro é mais rápido que a motocicleta");
}

// EX 02
let atacante = prompt("Digite o nome do atacante");
let defensor = prompt("Digite o nome do defensor");
let shield = confirm("O defensor tem escudo? (sim/não)");
let atk = prompt("Digite o poder do ataque");
let def = prompt("Digite o  da defesa");

if (atk > def && !shield) {
    alert(atk - def + " de dano! causado" + atacante + " tem a vantagem!");
} else if (def > atk && shield) {
    alert((atk - def) / 2 + " de dano causado! " + defensor + " conseguiu se defender com o escudo!");
}  else if (atk < def){
    alert(atacante + " não causou dano algum, pois o " + defensor + " esta bem protegido!");
};