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

    const addMessageForm = document.getElementById('add-message-form');
    const messageInput = document.getElementById('message-input');
    const nameInput = document.getElementById('name-input');
    const messagesSection = document.getElementById('messages');

    addMessageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const messageText = messageInput.value;
        const nameText = nameInput.value;

        if (messageText && nameText) {
            const newMessage = document.createElement('div');
            newMessage.className = 'message gold';
            newMessage.innerHTML = `<p>${messageText}</p><p>- ${nameText}</p>`;
            messagesSection.appendChild(newMessage);

            messageInput.value = '';
            nameInput.value = '';
        }
    });
});
