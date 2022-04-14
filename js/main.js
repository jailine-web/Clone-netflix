const name = document.querySelector("abrirVideo");

function abrirVideo(){
    
}

$('.owl-carousel').owlCarousel({
    loop:true, //faz com que a barra de rolagem seja infinita
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})