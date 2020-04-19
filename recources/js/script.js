
// SMOOTH SCROLL

$(function(){
    $('nav ul li a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        
        return false;
    });
});
// STICKY MENU

$(window).on('scroll', function(){
    if($(window).scrollTop()){
            $('nav').addClass('sticky');
       }
       else {
            $('nav').removeClass('sticky');
       }
});
// HAMBURGER MENU

function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}

function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}

// COUNTER UP 
$('.counter-num').counterUp({
    time:3000
});



particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});