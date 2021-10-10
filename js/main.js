$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 300) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
})

const typed = new Typed(".typing", {
    strings: ["Merhaba!", "Hello!", "Hola!", "Bonjour!", "Hallo!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});



<!-- Scroll Top Button -->

const myButton = document.getElementById('topBtn');
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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
            items:1,
            nav:false
        },
        1200:{
            items:2,
            nav:true,
            loop:true,
            animateOut: true
        }
    }
});

const swiper = new Swiper(".mySwiper", {
    speed: 600,
    loop:true,
    autoplay: {
        delay: 5000,
    },
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


