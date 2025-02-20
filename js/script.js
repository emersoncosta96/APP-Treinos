/* script.js */
const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        alert(`Você clicou em ${botao.textContent}`);
    });
});