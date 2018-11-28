// Create HTML5 elements for IE

document.createElement("article");
document.createElement("section");

//header
(function () {

    'use strict';

    var m = document.querySelector("main"),
        h = document.querySelector("header"),
        c = document.querySelector(".counter"),
        counter = 0,
        hHeight;

    function setTopPadding() {
        hHeight = h.offsetHeight;
        m.style.paddingTop = hHeight + "px";
    }

    function onScroll() {

        window.addEventListener("scroll", _.throttle(callbackFunc, 200));
        /**
        * Replace the line above with the following one 
        * to see how many more times the "callbackFunc" is executed
        */
        // window.addEventListener("scroll", callbackFunc);

        function callbackFunc() {
            c.style.visibility = "visible";
            c.innerHTML = counter++;
            var y = window.pageYOffset;
            if (y > 150) {
                h.classList.add("scroll");
            } else {
                h.classList.remove("scroll");
            }
        }
    }

    window.onload = function () {
        setTopPadding();
        onScroll();
    };

    window.onresize = function () {
        setTopPadding();
    };
})();

//anchorTag_click_scroll
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});


$(window).scroll(function (e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.2) + 'px');
}

var scrolled = $(window).scrollTop()
$('.parallax').each(function (index) {
    var imageSrc = $(this).data('image-src')
    var imageHeight = $(this).data('height')
    $(this).css('background-image', 'url(' + imageSrc + ')')
    $(this).css('height', imageHeight)

    // Adjust the background position.
    var initY = $(this).offset().top
    var height = $(this).height()
    var diff = scrolled - initY
    var ratio = Math.round((diff / height) * 100)
    $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px')
})
function isInViewport(node) {
    // Am I visible? Height and Width are not explicitly necessary in visibility
    // detection, the bottom, right, top and left are the essential checks. If an
    // image is 0x0, it is technically not visible, so it should not be marked as
    // such. That is why either width or height have to be > 0.
    var rect = node.getBoundingClientRect()
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

$(window).scroll(function () {
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function (index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var endY = initY + $(this).height()

        // Check if the element is in the viewport.
        var visible = isInViewport(this)
        if (visible) {
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position', 'center ' + parseInt(-(ratio * 1.5)) + 'px')
        }
    })
})

