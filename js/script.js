let nome = window.prompt('Coloque seu nome');

function inicio() {
    
    let cpf = window.prompt('Coloque seu CPF');
    window.alert(`Olá, ${nome}! É um prazer te conhecer!`);
    window.alert(`Então ${nome}, eu fiz esse site com um botão escondido. Se você achar, irá se surpreender!`);
    window.alert(`Você tem cerca de 5 minutos para encontrar o botão, pois após isso iremos fazer uma compra no seu CPF: ${cpf}`);
}

// Tornar o botão invisível clicável
document.querySelector('p').addEventListener('click', function() {
    const botao = document.getElementById('botaoInvisivel');
    botao.style.display = 'block'; // Mostra o botão
});

// Função para exibir a mensagem ao clicar no botão
function mostrarMensagem() {
    window.alert(`Surpresa! ${nome}, estava apenas brincando não vou usar seu cpf pra nada`);
}