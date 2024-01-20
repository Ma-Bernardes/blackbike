 // Lista de funcionários com seus detalhes
 var funcionarios = [
            { id: "001", nome: "Napoleão Bonaparte", cpf: "000.000.000-00", admissao: "11/10/2020", inicio: "01/07/2023", termino: "15/07/2023", periodo: "01/07/2023 - 15/07/2023" },

            { id: "002", nome: "Júlio Cesar", cpf: "000.000.000-00",  admissao: "12/08/2018",  inicio: "01/08/2023",  termino: "15/08/2023", periodo : "01/08/2023 - 15/08/2023" },

            { id: "003", nome: "Cleopátra", cpf: "000.000.000-00", admissao: "15/01/2022", inicio: "05/03/2023", termino: "20/03/2023", periodo: "05/03/2023 - 20/03/2023" },

            { id: "004", nome: "Joanna D'Arc", cpf: "000.000.000-00", admissao: "28/02/2022", inicio: "8/11/2023", termino: "23/11/2023", periodo: "8/11/2023 - 23/11/2023" },

            { id: "005", nome: "Carlos Martel", cpf: "000.000.000-00", admissao: "10/03/2022", inicio: "16/12/2023", termino: "31/12/2023", periodo: "16/12/2023 - 31/12/2023" },
  ];

  function exibirDemonstrativo() {
      // Obter o ID do funcionário inserido pelo usuário
      var idFuncionario = document.getElementById("idFuncionario").value;

      // Procurar o funcionário na lista
      var funcionario = funcionarios.find(function (f) {
          return f.id === idFuncionario;
      });

      if (funcionario) {
          // Construir o conteúdo do pop-up
          var popupContent = `
              <h2>Demonstrativo de Férias</h2>
              <p>ID: ${funcionario.id}</p>
              <p>Nome: ${funcionario.nome}</p>
              <p>CPF: ${funcionario.cpf}</p>
              <p>Admissão: ${funcionario.admissao}</p>
              <p>Início das Férias: ${funcionario.inicio}</p>
              <p>Término das Férias: ${funcionario.termino}</p>
              <p>Período de gozo: ${funcionario.periodo}</p> 
              <a href="#" onclick="fecharPopup()" class="botao">Fechar</a> 
              <a href="#" onclick="imprimirInformacoes()" class="botao">Imprimir</a>
          `;

          // Criar o elemento pop-up
          var popup = document.createElement('div');
          popup.id = 'popup';
          popup.innerHTML = popupContent;

          // Adicionar o pop-up ao corpo do documento
          document.body.appendChild(popup);

          // Estilizando o pop-up 
          popup.style.position = 'fixed'; //Posição fixa
          popup.style.top = '50%'; //Distancia do topo
          popup.style.left = '50%'; //Margem esquerda
          popup.style.transform = 'translate(-50%, -50%)'; //Centralizar o popup
          popup.style.padding = '20px'; //Declarando uma 'margem' 
          popup.style.backgroundColor = '#fff'; //Cor de fundo do popup
          popup.style.border = '1px solid #ccc'; //Fixando uma borda no popup
          popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; //Define uma leve sobra no elemento
          popup.style.zIndex = '1000';

          // Mantém a primeira pág por baixo do popup
          document.getElementById("pagina1").style.display = "none";

                  // Limpar os campos do formulário
        document.getElementById("idFuncionario").value = "";

      } else {
          alert("ID do funcionário não encontrado. Insira um ID válido."); // alerta para um id inválido
      }
  }

  // Função fictícia para imprimir informações
function imprimirInformacoes() {
    // Exibir mensagem de alerta
    alert('Impressora offline');
    
}


  // Função para fechar o pop-up
  function fecharPopup() {
      var popup = document.getElementById('popup');
      if (popup) {
          popup.parentNode.removeChild(popup); // Remove o pop-up 
          // Mostra a primeira página novamente 
          document.getElementById("pagina1").style.display = "block";
      }
  }