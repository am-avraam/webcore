import * as Swiper from './swiper.min.js';

const dumy = document.querySelector('.dumy-card');
const slider = document.querySelector(".slider-container");

if (window.innerWidth < 768) {
   dumy.remove();
} 

let mySwiper;

function mobileSlider() {
   if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
      mySwiper = new Swiper (slider, {
         slidesPerView: 1.25,
         spaceBetween: 16,
         loop: true,
         slideClass: 'card',
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
                     }
   });
   slider.dataset.mobile = "true";
   }

   if (window.innerWidth > 768) {
      slider.dataset.mobile = "false";
   if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy()
   }
      
   }
}

mobileSlider()

window.addEventListener("resize", () => {
   mobileSlider();
});



const dumy2 = document.querySelector('.dumy-card-2');
const slider2 = document.querySelector(".slider-container-2");

if (window.innerWidth < 768) {
   dumy2.remove();
} 

let mySecondSwiper;

function mobileSlider2() {
   if (window.innerWidth < 768 && slider2.dataset.mobile == "false") {
      mySecondSwiper = new Swiper (slider2, {
         slidesPerView: 1.25,
         spaceBetween: 16,
         loop: true,
         slideClass: 'card-2',
         pagination: {
            el: '.swiper-pagination-2',
            type: 'bullets',
                     }
   });
   slider2.dataset.mobile = "true";
   }

   if (window.innerWidth > 768) {
      slider2.dataset.mobile = "false";
   if (slider2.classList.contains('swiper-container-initialized')) {
      mySecondSwiper.destroy()
   }
      
   }
}

mobileSlider2();

window.addEventListener("resize", () => {
   mobileSlider2();
});





const slider3 = document.querySelector(".slider-container-3");

let myThirdSwiper;

function mobileSlider3() {
   if (window.innerWidth < 768 && slider3.dataset.mobile == "false") {
      myThirdSwiper = new Swiper (slider3, {
         slidesPerView: 1.19,
         spaceBetween: 16,
         loop: true,
         slideClass: 'card-3',
         pagination: {
            el: '.swiper-pagination-3',
            type: 'bullets',
                     }
   });
   slider3.dataset.mobile = "true";
   }

   if (window.innerWidth > 768) {
      slider3.dataset.mobile = "false";
   if (slider3.classList.contains('swiper-container-initialized')) {
      myThirdSwiper.destroy()
   }
      
   }
}

mobileSlider3();

window.addEventListener("resize", () => {
   mobileSlider3();
});