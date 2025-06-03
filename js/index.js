
const ham = document.querySelector(".hamberger");
const navbar = document.querySelector(".nav-content");

ham.addEventListener("click", () => {

  console.log(navbar.classList);
  navbar.classList.toggle("active");
});


// customer

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
  },
  // autoplay: {
  //   delay: 2000,
  // },
  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    425: {
      spaceBetween: 20,
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },

});