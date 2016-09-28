jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
        navbar = $('.bar');

        if (scrollPos > 10) {
            navbar.addClass('alt-color');
        } else {
            navbar.removeClass('alt-color');
        }

    });
    $(".button").on('click', function (event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 600, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
});


