document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');

    heart.addEventListener('mousemove', (e) => {
        const heartRect = heart.getBoundingClientRect();
        const heartCenterX = heartRect.left + heartRect.width / 2;
        const heartCenterY = heartRect.top + heartRect.height / 2;

        // Calculate the distance between the pointer and the heart
        const dx = e.clientX - heartCenterX;
        const dy = e.clientY - heartCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the pointer is close to the heart, move the heart away
        if (distance < 400) {
            // Calculate the angle between the pointer and the heart
            const angle = Math.atan2(dy, dx);
            // Move the heart in the opposite direction (away from the pointer)
            const moveX = Math.cos(angle) * -50; // Negative to move away
            const moveY = Math.sin(angle) * -50;
            heart.style.transform = `translate(${moveX}px, ${moveY}px) translateX(-50%)`;
        } else {
            // Reset the heart's position if the pointer is far
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
