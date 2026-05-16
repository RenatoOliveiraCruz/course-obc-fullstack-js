let fila;
let pacientes = [];
do {
  fila = parseFloat(
    prompt(
      "Bem vindo a fila do consultório, lista de espera:\n " +
        pacientes +
        "\n" +
        "\nDigite uma opção para prosseguir: \n" +
        "1 - Novo paciente \n" +
        "2 - Consultar paciente \n" +
        "3 - Sair",
    ),
  );
  switch (fila) {
    case 1:
      let novoPaciente = prompt("Digite o nome do paciente:");
      pacientes.push(novoPaciente);
      alert("Paciente adicionado à fila: " + novoPaciente + "\n");
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
