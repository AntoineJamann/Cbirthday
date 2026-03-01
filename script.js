document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');

    // Set initial position of the heart in pixels
    heart.style.left = '300px';
    heart.style.top = '300px';

    heart.addEventListener('mousemove', (e) => {
        const containerRect = container.getBoundingClientRect();
        const heartRect = heart.getBoundingClientRect();
        const heartCenterX = heartRect.left + heartRect.width / 2;
        const heartCenterY = heartRect.top + heartRect.height / 2;

        // Calculate distance between pointer and heart
        const dx = e.clientX - heartCenterX;
        const dy = e.clientY - heartCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the pointer is close to the heart, move it away smoothly
        if (distance < 150) {
            const angle = Math.atan2(dy, dx);

            // Smaller steps for smoother movement
            const moveX = Math.cos(angle) * -5;
            const moveY = Math.sin(angle) * -5;

            // Get current position in pixels
            const currentLeft = parseFloat(window.getComputedStyle(heart).left);
            const currentTop = parseFloat(window.getComputedStyle(heart).top);

            // Calculate new position
            let newX = currentLeft + moveX;
            let newY = currentTop + moveY;

            // Constrain the heart within the container bounds
            newX = Math.max(50, Math.min(newX, containerRect.width - heartRect.width - 50));
            newY = Math.max(50, Math.min(newY, containerRect.height - heartRect.height - 50));

            // Apply the new position
            heart.style.left = `${newX}px`;
            heart.style.top = `${newY}px`;
        }
    });

    heart.addEventListener('click', () => {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    });
});
