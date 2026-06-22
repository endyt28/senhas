# 🔒 Segurança Digital: Validador de Senhas

Projeto desenvolvido durante o curso de **Matematica para Programar Senhas Seguras** da Alura Start. O objetivo principal é unir conceitos de programação (HTML, CSS e JavaScript) com a matemática do Ensino Médio para calcular a força real de uma senha.

---

## 🚀 Funcionalidades

* **Análise em Tempo Real:** O programa identifica o comprimento da senha digitada.
* **Detecção de Caracteres:** Identifica se a senha possui números, letras minúsculas, maiúsculas ou símbolos.
* **Cálculo de Entropia:** Mostra o total de combinações matemáticas possíveis necessárias para quebrar a senha por força bruta.

---

## 🧮 A Matemática por Trás do Projeto

O projeto utiliza o **Princípio Multiplicativo** (Análise Combinatória) para calcular a segurança. A fórmula aplicada no código é:

P = B ^ L

Onde:
* **B (Base):** O total de opções de caracteres disponíveis no "alfabeto" escolhido (ex: apenas números = 10 opções; letras e números = 36 opções).
* **L (Largura/Comprimento):** A quantidade de caracteres que a senha possui.

Quanto maior o resultado de **P**, mais segura é a senha e mais tempo um computador demoraria para adivinhá-la.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura da página web.
* **CSS3:** Estilização e design responsivo (modo escuro).
* **JavaScript:** Lógica de programação e cálculos matemáticos.

---

## 🧑‍💻 Como testar o projeto

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Digite uma senha no campo indicado e veja a mágica da matemática acontecer!
