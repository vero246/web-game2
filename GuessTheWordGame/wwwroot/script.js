document.getElementById('submit').addEventListener('click', async () => {
    const guess = document.getElementById('guess').value;
    const response = await fetch('/api/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guess })
    });

    const data = await response.json();
    const resultElement = document.getElementById('result');
    const body = document.body;

    if (data.success) {
        // Изменяем интерфейс при правильном ответе
        body.style.background = 'linear-gradient(135deg, #43cea2, #185a9d)';
        resultElement.textContent = 'Поздравляем, вы выиграли!';
        resultElement.className = 'success';

        // Добавляем конфетти
        createConfetti();
    } else {
        // Изменяем интерфейс при неправильном ответе
        body.style.background = 'linear-gradient(135deg, #ff4d4d, #ff9a9e)';
        resultElement.textContent = 'Неправильно, попробуйте ещё раз!';
        resultElement.className = 'error';
    }
});

// Функция для создания конфетти (только для правильного ответа)
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';

    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confetti.style.borderRadius = '50%';
        confetti.style.top = `${Math.random() * 100}%`;
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.opacity = Math.random();
        confetti.style.animation = `fall ${2 + Math.random() * 3}s ease-out`;

        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => confettiContainer.remove(), 5000); // Удаляем конфетти через 5 секунд
}
