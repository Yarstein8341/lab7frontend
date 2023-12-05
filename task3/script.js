document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const button = document.querySelector('.button');
    let isHovered = false;

    function getRandomPosition() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        return { x: newX, y: newY };
    }

    function moveButton() {
        if (isHovered) {
            const newPosition = getRandomPosition();
            button.style.left = `${newPosition.x}px`;
            button.style.top = `${newPosition.y}px`;
        }
        setTimeout(moveButton, 1000);
    }

    button.addEventListener('mouseenter', function () {
        isHovered = true;
        moveButton();
    });

    button.addEventListener('mouseleave', function () {
        isHovered = false;
    });
});
