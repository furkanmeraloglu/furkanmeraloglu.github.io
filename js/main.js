$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 400){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
    })
})

var typed = new Typed(".typing",{
    strings:["Merhaba!", "Hello!", "Hola!", "Bonjour!", "Hallo!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})