document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');

    heart.addEventListener('mousemove', (e) => {
        const heartRect = heart.getBoundingClientRect();
        const heartCenterX = heartRect.left + heartRect.width / 2;
        const heartCenterY = heartRect.top + heartRect.height / 2;

        const dx = e.clientX - heartCenterX;
        const dy = e.clientY - heartCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300) {
            const angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * 50;
            const moveY = Math.sin(angle) * 50;
            heart.style.transform = `translate(${moveX - 50}%, ${moveY}px)`;
        } else {
            heart.style.transform = 'translateX(-50%)';
        }
    });

    heart.addEventListener('click', () => {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    });
});
