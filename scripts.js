// Countdown Timer
const birthdayDate = new Date('2025-05-10T00:00:00');  // Change to the actual birthday date
const timerElement = document.getElementById('timer');

function updateCountdown() {
    const now = new Date();
    const diff = birthdayDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Guestbook Form
const guestbookForm = document.getElementById('guestbook-form');
const guestMessages = document.getElementById('messages');

guestbookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = guestbookForm.querySelector('textarea').value;

    if (message.trim()) {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        guestMessages.appendChild(messageElement);
        guestbookForm.reset();
    }
});

// Play Happy Birthday Song
const playSongButton = document.getElementById('playSong');
const birthdaySong = document.getElementById('birthdaySong');

playSongButton.addEventListener('click', () => {
    birthdaySong.play();
});
