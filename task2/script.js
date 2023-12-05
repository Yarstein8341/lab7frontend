document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#34495e', '#f1c40f', '#e67e22', '#95a5a6'];

    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        const radius = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];

        circle.classList.add('circle');
        circle.style.width = `${radius}px`;
        circle.style.height = `${radius}px`;
        circle.style.backgroundColor = color;

        const left = Math.random() * (container.clientWidth - radius * 2);
        const top = Math.random() * (container.clientHeight - radius * 2);
        circle.style.left = `${left}px`;
        circle.style.top = `${top}px`;

        container.appendChild(circle);
    }

    const circles = document.querySelectorAll('.circle');
    let activeIndex = 0;

    function setActiveCircle(index) {
        circles.forEach((circle, i) => {
            if (i === index) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    container.addEventListener('keydown', function (event) {
        if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            activeIndex = (activeIndex + 1) % circles.length;
            setActiveCircle(activeIndex);
        } else if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            activeIndex = (activeIndex - 1 + circles.length) % circles.length;
            setActiveCircle(activeIndex);
        } else if (event.key === 'ArrowRight') {
            circles[activeIndex].style.left = `${parseInt(circles[activeIndex].style.left, 10) + 10}px`;
        } else if (event.key === 'ArrowLeft') {
            circles[activeIndex].style.left = `${parseInt(circles[activeIndex].style.left, 10) - 10}px`;
        } else if (event.key === 'ArrowUp') {
            circles[activeIndex].style.top = `${parseInt(circles[activeIndex].style.top, 10) - 10}px`;
        } else if (event.key === 'ArrowDown') {
            circles[activeIndex].style.top = `${parseInt(circles[activeIndex].style.top, 10) + 10}px`;
        }
    });

    setActiveCircle(activeIndex);
});
