let turistName = prompt("Digite o nome do turista:");
let cidadesVisitadas = 0;
let nomesCidades = "";
let pergunta = prompt("O turista " + turistName + " visitou alguma cidade? (Sim/Não)").toLowerCase();

while (pergunta === "sim") {
    let cidade = prompt("Digite o nome da cidade visitada:");
    nomesCidades += cidade + ", ";  
    cidadesVisitadas++;
    pergunta = prompt("O turista visitou outra cidade? (Sim/Não)").toLowerCase();
} 

if (cidadesVisitadas > 0) { 
        alert("O turista " + turistName + " visitou " + cidadesVisitadas + " cidade(s).");
        alert("Todas as cidades visitadas: " + nomesCidades);
 } else {
        alert("O turista " + turistName + " não visitou mais nenhuma outra cidade.");
        break;
 };