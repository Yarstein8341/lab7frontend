document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll('li');

    function clearSelection() {
        listItems.forEach(item => {
            item.classList.remove('selected');
        });
    }

    listItems.forEach(item => {
        item.addEventListener('click', function (event) {
            if (!event.ctrlKey && !event.metaKey) {
                clearSelection();
            }
            item.classList.toggle('selected');
        });
    });
});
