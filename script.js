document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');

    // Set initial position of the heart in the center
    heart.style.left = '300px';
    heart.style.top = '300px';

    // Define the movement boundaries (smaller than the container)
    const minX = 100;
    const maxX = 650;
    const minY = 100;
    const maxY = 300;

    heart.addEventListener('mousemove', (e) => {
        const containerRect = container.getBoundingClientRect();
        const heartRect = heart.getBoundingClientRect();
        const heartCenterX = heartRect.left + heartRect.width / 2;
        const heartCenterY = heartRect.top + heartRect.height / 2;

        // Calculate distance between pointer and heart
        const dx = e.clientX - heartCenterX;
        const dy = e.clientY - heartCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the pointer is close to the heart, move it away
        if (distance < 150) {
            const angle = Math.atan2(dy, dx);

            // Move the heart away from the pointer
            const moveX = Math.cos(angle) * -30; // Adjust speed here
            const moveY = Math.sin(angle) * -30;

            // Get current position in pixels
            let currentLeft = parseFloat(window.getComputedStyle(heart).left);
            let currentTop = parseFloat(window.getComputedStyle(heart).top);

            // Calculate new position
            let newX = currentLeft + moveX;
            let newY = currentTop + moveY;

            // Constrain the heart within the container bounds
            newX = Math.max(0, Math.min(newX, containerRect.width - heartRect.width));
            newY = Math.max(0, Math.min(newY, containerRect.height - heartRect.height));

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
