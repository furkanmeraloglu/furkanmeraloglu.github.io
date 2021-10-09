$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 300) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
})

var typed = new Typed(".typing", {
    strings: ["Merhaba!", "Hello!", "Hola!", "Bonjour!", "Hallo!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});





/* IE/Safari Scroll Smoothness */

$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 700);
    }
})

/* Owl Carousel for Edu-Info */

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    dots: false,
    nav:true,
    navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        750:{
            items:2,
            nav:false
        },
        1200:{
            items:3,
            nav:true,
            loop:true,
            animateOut: true
        }
    }
});