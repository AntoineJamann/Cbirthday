const heart = document.getElementById('heart');
const message = document.getElementById('message');

// Make the heart move away from the pointer
heart.addEventListener('mousemove', (e) => {
    const heartRect = heart.getBoundingClientRect();
    const heartCenterX = heartRect.left + heartRect.width / 2;
    const heartCenterY = heartRect.top + heartRect.height / 2;

    // Calculate the distance between the pointer and the heart
    const dx = e.clientX - heartCenterX;
    const dy = e.clientY - heartCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Move the heart away if the pointer is too close
    if (distance < 100) { // Adjust this value to change sensitivity
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * 20; // Adjust speed
        const moveY = Math.sin(angle) * 20;
        heart.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
        heart.style.transform = 'translate(0, 0)';
    }
});

// Show the message when the heart is clicked
heart.addEventListener('click', () => {
    message.style.display = 'block';
});
