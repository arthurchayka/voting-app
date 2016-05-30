$(document).ready(function() {

    $(window).scroll(function() {
        var s = $(window).scrollTop(),
            opacityVal = (s / 100.0);
        $('.blurred-header-img').css('opacity', opacityVal);
    });

    $('.container').masonry({
        itemSelector: '.card',
        columnWidth: 330
    });

		window.sr = ScrollReveal();
		sr.reveal('footer, .newpost',{ duration: 800 });

});
