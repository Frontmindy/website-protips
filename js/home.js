var mySwiper = new Swiper ('.swiper-container-testemunhas', {
  pagination: {
    el: '.swiper-pagination-testemunhas',
    clickable: true,
  },
});

var mySwiperPosts = new Swiper ('.swiper-container-posts', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination-posts',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
