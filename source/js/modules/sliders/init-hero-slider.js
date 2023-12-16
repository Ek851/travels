import Swiper from '../../vendor/swiper';

const heroSlider = document.querySelector('[data-slider="hero-slider"]');
const heroPagination = document.querySelector('[data-slider="hero-pagination"]');

const swiperHero = new Swiper(heroSlider, {
  pagination: {
    el: heroPagination,
    type: 'bullets',
    clickable: true,
  },
  slidesPerView: 1,
  loop: true,
});

const initHeroSlider = () => {
  if (document.body.contains(heroSlider)) {
    return swiperHero;
  }

  return null;
};

export {initHeroSlider};

