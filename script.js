document.getElementById('giftContainer').addEventListener('click', function () {
    const gift = document.getElementById('gift');
    gift.classList.add('hidden');
    document.getElementById('surpriseButton').classList.remove('hidden');
    document.getElementById('backgroundMusic').play();
});

document.getElementById('surpriseButton').addEventListener('click', function () {
    const message = "Feliz Dia dos Pais! Obrigado por tudo que você faz e por tanto que você luta. Você é o melhor pai do mundo! Obrigado pelos conselhos e até mesmo pelas brigas. Saiba que um dia eu vou recompensar tudo.";
    const surpriseMessage = document.getElementById('surpriseMessage');
    const heartContainer = document.getElementById('heartContainer');
    const fireworksContainer = document.getElementById('fireworksContainer');
    const videoContainer = document.getElementById('videoContainer');
    const surpriseVideo = document.getElementById('surpriseVideo');

    surpriseMessage.innerHTML = '';

    message.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.style.animationDelay = `${index * 0.05}s`;
        span.textContent = char;
        surpriseMessage.appendChild(span);
    });

    surpriseMessage.classList.remove('hidden');
    heartContainer.classList.remove('hidden');
    createFireworks(fireworksContainer);

    // Exibir o vídeo e iniciar a reprodução
    videoContainer.classList.remove('hidden');
    surpriseVideo.play();
});

function createFireworks(container) {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 100}%`;
            container.appendChild(firework);

            setTimeout(() => firework.remove(), 1000);
        }, i * 200);
    }
}
