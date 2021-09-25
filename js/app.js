const btnMenu = document.querySelector('.btnMenu');
const menu =  document.querySelector('.menu');


btnMenu.addEventListener('click', e => {
    btnMenu.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

menu.addEventListener('click', e => {
    btnMenu.classList.remove('is-active');
    menu.classList.remove('is-active');
})


///SWIPER CAROUSEL
window.addEventListener('load', function(){
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,        
    });      
});

///imgShow

const galeria = document.querySelectorAll(".grid-item"),
cerrar = document.querySelector(".cerrar"),
show = document.querySelector('.imgShow')
prevImg = show.querySelector('img');

window.onload = () => {
    for (let i = 0; i < galeria.length; i++) {
        let indice = i;
        let clickImagen;
        console.log(galeria.length);
        galeria[i].onclick = () => {
            clickImagen = i;
        
            function preview() {
                let imageURL = galeria[indice].querySelector('img').src;
                prevImg.src = imageURL;
                console.log(imageURL);
            }
        }
    }
}