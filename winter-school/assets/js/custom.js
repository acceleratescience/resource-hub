document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    // Disable looping for a better fullscreen experience
    loop: false,
    
    // Fraction pagination (e.g., "1 / 112")
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    // If you want navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});