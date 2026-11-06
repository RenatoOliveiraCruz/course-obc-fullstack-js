// Fila de espera
let fila;
let pacientes = [];

do {
  let listaPacientes = "";

  // ITERAÇÃO DO ARRAY PARA EXIBIR A LISTA DE PACIENTES
  for (let i = 0; i < pacientes.length; i++) {
    listaPacientes += `${i + 1}º - ${pacientes[i]}\n`;
  }

  fila = parseInt(
    prompt(
      "Bem vindo a fila do consultório\n" +
        "Lista de espera:\n " +
        (listaPacientes || "Nenhum paciente na fila\n") +
        "\n\nDigite uma opção para prosseguir: \n" +
        "1 - Novo paciente \n" +
        "2 - Consultar paciente \n" +
        "3 - Sair",
    ),
  );

  switch (fila) {
    case 1:
      let novoPaciente = prompt("Digite o nome do paciente:");
      pacientes.push(novoPaciente);
      alert("Paciente adicionado à fila: " + novoPaciente);
      break;

    case 2:
      if (pacientes.length > 0) {
        let pacienteConsultado = pacientes.shift();
        alert("Paciente consultado: " + pacienteConsultado);
      } else {
        alert("Não há pacientes na fila para consultar.");
      }
      break;

    case 3:
      alert("Encerrando o sistema. Até mais!");
      break;

    default:
      alert("Opção inválida. Por favor, escolha uma opção válida.");
  }
} while (fila !== 3);

// Pilha de cartas
let pilha;
let cartas = [];

do {
  let listaCartas = "";
  for (let i = 0; i < cartas.length; i++) {
    listaCartas += `${i + 1}º - ${cartas[i]}\n`;
  }

  pilha = parseInt(
    prompt(
      "Bem vindo a pilha de cartas\n" +
        "Cartas na pilha:\n " +
        (listaCartas || "Nenhuma carta na pilha\n") +
        "\n\nDigite uma opção para prosseguir: \n" +
        "1 - Adicionar carta \n" +
        "2 - Remover carta \n" +
        "3 - Sair",
    ),
  );
  switch (pilha) {
    case 1:
      let novaCarta = prompt("Digite o nome da carta:");
      cartas.push(novaCarta);
      alert("Carta adicionada à pilha: " + novaCarta);
      break;

    case 2:
      if (cartas.length > 0) {
        let cartaRemovida = cartas.pop();
        alert("Carta removida da pilha: " + cartaRemovida);
      } else {
        alert("Não há cartas na pilha para remover.");
      }

    case 3:
      alert("Encerrando o sistema. Até mais!");
      break;

    default:
      alert("Opção inválida. Por favor, escolha uma opção válida.");
  }
} while (pilha !== 3);
