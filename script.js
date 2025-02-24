// Função para adicionar valores ao display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular o resultado da expressão
function calculateResult() {
    try {
        // Avalia a expressão no display e exibe o resultado
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        // Em caso de erro, exibe uma mensagem de alerta
        alert('Expressão inválida!');
    }
}

// Função para calcular o valor de porcentagem
function calculatePercentage() {
    let currentValue = document.getElementById('display').value;
    if (currentValue) {
        // Se a expressão for válida, calcula a porcentagem
        let result = eval(currentValue) / 100;
        document.getElementById('display').value = result;
    } else {
        // Se não houver nada no display, exibe uma mensagem de erro
        alert('Digite um número para calcular a porcentagem');
    }
}
