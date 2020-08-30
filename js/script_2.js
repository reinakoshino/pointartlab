window.onload = function() {
  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-container',
      prevEl: '.swiper-button-prev-container',
    },
  });
};