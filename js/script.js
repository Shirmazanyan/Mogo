$(document).ready(function(){

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[100])
});

$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

$(".counterup-text").counterUp({
	delay: 1,
	time: 1000
});

$('.toggleThis').click(function() {
	$(this).parent().find(".content").slideToggle(300);
});  
 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true
});

$('.review').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    
});
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})















