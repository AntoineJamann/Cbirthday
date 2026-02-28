const heart = document.getElementById('heart');
const message = document.getElementById('message');

heart.addEventListener('click', () => {
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000); // Le message disparaît après 3 secondes
});
