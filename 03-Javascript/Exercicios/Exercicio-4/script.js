let turistName = prompt("Digite o nome do turista:");

let pergunta;
let cidadesVisitadas = 0;
while (pergunta === "sim") {
    pergunta = prompt("O turista " + turistName + " visitou alguma cidade? (Sim/Não)").toLowerCase();
    let cidade = prompt("Digite o nome da cidade visitada:");
    let nomesCidades = "Todas as cidades visitadas por " + turistName + " são: " + cidade + ", ";
    cidadesVisitadas++;
if (pergunta === "não") {
        alert("O turista " + turistName + " visitou " + cidadesVisitadas + " cidade(s).");
        alert(nomesCidades);   
}
 // for (let i = 0; i < cidadesVisitadas; i++) {
    //     let cidade = prompt("Digite o nome da cidade visitada:");
    //     nomesCidades.push(cidade);
    // }
}