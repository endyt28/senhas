// Função para calcular a segurança da senha
function calcularSeguranca() {
    // 1. Pega a senha que o usuário digitou na tela
    let senha = document.querySelector('#input-senha').value;
    let comprimento = senha.length;
    
    // Se o campo estiver vazio, não faz nada
    if (comprimento === 0) {
        return;
    }

    // 2. Define o tamanho do "alfabeto" (base matemática)
    let baseOpcoes = 0;

    // Checa quais tipos de caracteres existem na senha
    let temNumeros = /[0-9]/.test(senha);
    let temMinusculas = /[a-z]/.test(senha);
    let temMaiusculas = /[A-Z]/.test(senha);
    let temSimbolos = /[^a-zA-Z0-9]/.test(senha);

    // Soma as possibilidades na base conforme as regras da Análise Combinatória
    if (temNumeros) baseOpcoes += 10;       // 0 a 9
    if (temMinusculas) baseOpcoes += 26;    // a a z
    if (temMaiusculas) baseOpcoes += 26;    // A a Z
    if (temSimbolos) baseOpcoes += 32;      // Símbolos comuns (!@#$...)

    // 3. Aplica o Princípio Multiplicativo: Base elevada ao Comprimento
    // Exemplo matemático: Possibilidades = baseOpcoes ^ comprimento
    let totalCombinacoes = Math.pow(baseOpcoes, comprimento);

    // 4. Mostra o resultado na tela para o usuário
    let resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.innerHTML = `Sua senha tem ${comprimento} caracteres e uma base de ${baseOpcoes} opções.<br>
    <strong>Total de combinações possíveis:</strong> ${totalCombinacoes.toLocaleString('pt-BR')}`;
}
