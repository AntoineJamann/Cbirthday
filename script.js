document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');

    // Set initial position of the heart in the center
    heart.style.left = '300px';
    heart.style.top = '300px';

    // Define the movement boundaries (within the container)
    const minX = 50;
    const maxX = 650; // 700px container width - heart width
    const minY = 150;
    const maxY = 550; // 700px container height - heart height

    heart.addEventListener('mousemove', (e) => {
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

            // Move the heart away from the pointer in both X and Y directions
            const moveX = Math.cos(angle) * -4;
            const moveY = Math.sin(angle) * -4;

            // Get current position in pixels
            let currentLeft = parseFloat(window.getComputedStyle(heart).left);
            let currentTop = parseFloat(window.getComputedStyle(heart).top);

            // Calculate new position
            let newX = currentLeft + moveX;
            let newY = currentTop + moveY;

            // Constrain the heart within the defined boundaries
            newX = Math.max(minX, Math.min(newX, maxX));
            newY = Math.max(minY, Math.min(newY, maxY));

            // Apply the new position
            heart.style.left = `${newX}px`;
            heart.style.top = `${newY}px`;
        }
    });

    heart.addEventListener('click', () => {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.opacity = '1'; // Fade in the message
        }, 10); // Small delay to ensure display is set to block
    });
});
