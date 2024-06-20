document.addEventListener('DOMContentLoaded', function () {
    const campos = document.querySelectorAll('input');
    
    campos.forEach(campo => {
        const mensagemObrigatorio = campo.nextElementSibling;
        mensagemObrigatorio.textContent = 'Campo obrigatório';
        mensagemObrigatorio.style.display = 'none';
        mensagemObrigatorio.style.color = 'red';
        mensagemObrigatorio.style.position = 'static';
        mensagemObrigatorio.style.fontSize = '13px';

        
        
    
        campo.addEventListener('focus', function() {
            mensagemObrigatorio.style.display = 'block';
        });
        
        campo.addEventListener('blur', function() {
            mensagemObrigatorio.style.display = 'none';
            
            if (campo.value.trim().length < 2) {
                mensagemObrigatorio.textContent = 'Campo obrigatório (mais de 2 caracteres)';
                campo.style.borderColor = 'red';
            } else {
                campo.style.borderColor = 'lightgreen';
            }
            
            if (campo.type === 'email' && (!campo.value.includes('@') || !campo.value.includes('.com'))) {
                mensagemObrigatorio.textContent = 'Campo obrigatório (deve conter "@" e ".com")';
                campo.style.borderColor = 'red';
            }
        });
    });
});
//validar campo mensagem//
   

// Função para atualizar o contador de letras
function atualizarContador() {
    // Obtém o texto do textarea
    var texto = document.getElementById("mensagem1").value;
    // Calcula o número de caracteres
    var numeroCaracteres = texto.length;
    // Atualiza o contador
    document.getElementById("contador").innerHTML = 300 - numeroCaracteres;
  }
  
  // Adiciona um event listener para o evento de entrada no textarea
  document.getElementById("mensagem1").addEventListener("input", atualizarContador);