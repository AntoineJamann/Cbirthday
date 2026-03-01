document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');

    // Make the heart escape the pointer
    heart.addEventListener('mousemove', (e) => {
        const heartRect = heart.getBoundingClientRect();
        const heartCenterX = heartRect.left + heartRect.width / 2;
        const heartCenterY = heartRect.top + heartRect.height / 2;

        // Calculate distance between pointer and heart
        const dx = e.clientX - heartCenterX;
        const dy = e.clientY - heartCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Move heart away if pointer is close
        if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * 30; // Increase for faster movement
            const moveY = Math.sin(angle) * 30;
            heart.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            heart.style.transform = 'translate(0, 0)';
        }
    });

    // Show message when heart is clicked
    heart.addEventListener('click', () => {
        message.style.display = 'block';
    });
});
