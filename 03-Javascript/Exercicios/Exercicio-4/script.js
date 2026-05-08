let turistName = prompt("Digite o nome do turista:");
let cidadesVisitadas = 0;
let pergunta = prompt("O turista " + turistName + " visitou alguma cidade? (Sim/Não)").toLowerCase();

if (pergunta === "sim") {
    let cidade = prompt("Digite o nome da cidade visitada:");
    let nomesCidades = "Todas as cidades visitadas por " + turistName + " são: " + cidade + ", ";
    cidadesVisitadas++;
} else { 
        alert("O turista " + turistName + " visitou " + cidadesVisitadas + " cidade(s).");
        alert(nomesCidades);   
 }