document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');

    heart.addEventListener('mousemove', (e) => {
        const containerRect = container.getBoundingClientRect();
        const heartRect = heart.getBoundingClientRect();
        const heartCenterX = heartRect.left + heartRect.width / 2;
        const heartCenterY = heartRect.top + heartRect.height / 2;

        // Calculate the distance between the pointer and the heart
        const dx = e.clientX - heartCenterX;
        const dy = e.clientY - heartCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If the pointer is close to the heart, move the heart away
        if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            // Increase the movement distance for more escape space
            const moveX = Math.cos(angle) * -50;
            const moveY = Math.sin(angle) * -50;

            // Calculate new position, ensuring it stays within the container
            let newX = heartCenterX + moveX;
            let newY = heartCenterY + moveY;

            // Constrain the heart within the container bounds
            newX = Math.max(0, Math.min(newX, containerRect.width - heartRect.width));
            newY = Math.max(0, Math.min(newY, containerRect.height - heartRect.height));

            // Apply the new position
            heart.style.left = `${(newX / containerRect.width) * 100}%`;
            heart.style.top = `${(newY / containerRect.height) * 100}%`;
        }
    });

    heart.addEventListener('click', () => {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    });
});
