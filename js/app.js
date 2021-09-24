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