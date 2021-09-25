const btnMenu = document.querySelector('.btnMenu');
const menu =  document.querySelector('.menu');
const aMenu = document.querySelectorAll('.menu a');


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
        delay: 3500,
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

document.querySelectorAll('.grid .grid-item img').forEach((elemento) => {
    const ruta = elemento.getAttribute('src');
   
    elemento.addEventListener('click', () => {
        show.classList.add('show');
        document.querySelector('.imgShow img').src = ruta;
    });
});

cerrar.addEventListener('click', e => {
    show.classList.remove('show');
})

///SCROLLBTN
document.addEventListener('DOMContentLoaded', (e) => {
    const scrollBtn = document.querySelector('.btnScroll');

    window.addEventListener('scroll', e => {
      let scrollTop = window.pageYOffset;
     
      if (scrollTop > 600){
        
        scrollBtn.classList.remove('hidden');
      }else{
        scrollBtn.classList.add('hidden');
      }
    });

    scrollBtn.addEventListener('click', (e) => {
        window.scrollTo({
          behavior: "smooth",
          top: 0,          
        })
      });
  })