document.addEventListener('DOMContentLoaded', function() {
    const confettiContainer = document.getElementById('confetti');
    const confettiCount = 100;  // Nombre de confettis
    const colors = ['#FFC700', '#FF0000', '#00FF00', '#0000FF', '#FF00FF']; // Couleurs des confettis
    const maxDuration = 10; // Durée maximale de la chute des confettis

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${Math.random() * maxDuration + 2}s`; // Entre 2 et maxDuration+2 secondes
        confetti.style.animationDelay = `${Math.random() * maxDuration}s`; // Délai aléatoire
        confettiContainer.appendChild(confetti);
    }
});
