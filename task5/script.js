document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const handle = document.querySelector('.slider-handle');

    let isDragging = false;

    handle.addEventListener('mousedown', function (event) {
        isDragging = true;
        handle.style.transition = 'none';
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
        handle.style.transition = '';
    });

    slider.addEventListener('mousemove', function (event) {
        if (isDragging || event.buttons === 1) {
            const sliderRect = slider.getBoundingClientRect();
            let newPosition = event.clientX - sliderRect.left;

            if (newPosition < 0) {
                newPosition = 0;
            } else if (newPosition > sliderRect.width) {
                newPosition = sliderRect.width;
            }

            handle.style.left = `${newPosition}px`;
        }
    });

    handle.addEventListener('mouseleave', function () {
        if (isDragging) {
            isDragging = false;
            handle.style.transition = '';
        }
    });
});
