let menu;

do {
    menu = parseFloat(prompt("Escolha uma opção:\n1 - Iniciar Jogo\n2 - Carregar Jogo\n3 - Configurações\n4 - Créditos\n5 - Sair"));
    switch (menu) {
        case "1":
            alert("Iniciando jogo...");
            break;
        case "2":
            alert("Carregando jogo...");
            break;
        case "3":
            alert("Abrindo configurações...");
            break;
        case "4":
            alert("Mostrando créditos...");
            break;
        case "5":
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida, tente novamente.");
        }
    } while (menu !== "5");

