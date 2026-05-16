let fila;
let pacientes = [];

do {
  fila = parseInt(
    prompt(
      "Bem vindo a fila do consultório, lista de espera:\n " +
        pacientes.join("\n") +
        "\n\nDigite uma opção para prosseguir: \n" +
        "1 - Novo paciente \n" +
        "2 - Consultar paciente \n" +
        "3 - Sair",
    ),
  );

  switch (fila) {
    case 1:
      let novoPaciente = prompt("Digite o nome do paciente:");

      for (let i = 1; i < pacientes.length; i++) {
        pacientes.push(novoPaciente);
      }
      alert("Paciente adicionado à fila: " + "º - " + novoPaciente);
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
