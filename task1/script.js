$(function () {
    function randomPositionAndSize($element) {
        var maxSize = 100;
        var minSize = 30;
        var containerWidth = $(".container").width();
        var containerHeight = $(".container").height();

        var newPositionTop = Math.random() * (containerHeight - maxSize);
        var newPositionLeft = Math.random() * (containerWidth - maxSize);
        var newSize = Math.random() * (maxSize - minSize) + minSize;

        $element.animate({
            width: newSize,
            height: newSize,
            top: newPositionTop,
            left: newPositionLeft,
        });
    }

    $(".draggable").each(function () {
        randomPositionAndSize($(this));
    });

    $(".draggable").draggable({
        containment: ".container",
        scroll: false,
    });

    $(".draggable").on("click", function () {
        randomPositionAndSize($(this));
    });
});
