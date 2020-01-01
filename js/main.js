const mobileWidth = 320;
const miniDesktopWidth = 768;
const desktopWidth = 1120;
//var swiperList = document.querySelector('.swiper-container').swiper;
let swiperValues = {
  
    slidesPerView: 'auto',
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }

  
};
if(window.innerWidth < miniDesktopWidth){
 swiperList =  new Swiper('.swiper-container', swiperValues);
}
const swiperFunc = function(){
  if (window.innerWidth >= miniDesktopWidth) {
    swiperList.destroy();
  } else {
    swiperList = new Swiper('.swiper-container', swiperValues)
  }
}
  window.addEventListener('resize', swiperFunc);

let swiperBtn = document.querySelector('.slider-section__btn');
swiperBtn.addEventListener('click', function(){
  let slides = document.querySelectorAll('.swiper__item'); 
  let sliderSection = document.querySelector('.slider-section');
  if(!sliderSection.classList.contains('slider-section--active')){
    sliderSection.classList.add('slider-section--active');
    
  } else {
    sliderSection.classList.remove('slider-section--active');
    
  }
  if(!swiperBtn.classList.contains('slider-section__btn--rotate')){
    swiperBtn.classList.add('slider-section__btn--rotate');
    
  } else {
    swiperBtn.classList.remove('slider-section__btn--rotate');
    
  }
  for(let i = 6; i <= slides.length; ++i){
    if(!slides[i].classList.contains('flex')){
      slides[i].classList.add('flex');
      slides[i].classList.remove('none');
    } else {
      slides[i].classList.remove('flex');
      slides[i].classList.add('none');
    }

  }

});