document.addEventListener('DOMContentLoaded', () => {
    let enviarButton = document.getElementById('enviar');
    let popup = document.getElementById('popup');
    let duvidaInput = document.getElementById('dúvida');

// Adiciona um evento de clique ao botão Enviar
    enviarButton.addEventListener('click', (event) => {
    
        // Evita o comportamento padrão de envio do formulário
        event.preventDefault();

// Verifica se o campo de dúvida não está vazio
        if (duvidaInput.value.trim()) {
// Limpa o campo de entrada e muda a cor de fundo
            duvidaInput.value = '';
            duvidaInput.style.backgroundColor = 'lightgray';
// Exibe o popup ao clicar no botão Enviar
            popup.style.display = 'block';
        } else {
            alert('Por favor, insira sua dúvida antes de enviar.');
        }
    });

// Seleciona o botão Fechar
    let closePopupButton = document.getElementById('closePopup');
    
// Adiciona um evento de clique ao botão Fechar
    closePopupButton.addEventListener('click', () => {
// Oculta o popup quando o botão Fechar é clicado
        popup.style.display = 'none';
// Restaura a cor de fundo original do campo de entrada
        duvidaInput.style.backgroundColor = '';
    });
});