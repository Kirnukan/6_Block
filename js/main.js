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
const swiperFunc = function(evt){
  if (window.innerWidth >= miniDesktopWidth) {
    swiperList.destroy();
  } else {
    swiperList = new Swiper('.swiper-container', swiperValues)
  }
}
  window.addEventListener('resize', swiperFunc);

let swiperBtn = document.querySelector('.slider-section__btn');
swiperBtn.addEventListener('click', function(evt){
  let slides = document.querySelectorAll('.swiper__item'); 
  let sliderSection = document.querySelector('.slider-section');
  for(let i = 6; i <= slides.length; i++){
    if(slides[i].style.display == 'none'){
      slides[i].style.display = 'flex';
    } else {
      slides[i].style.display = 'none';
    }
    if(sliderSection.style.maxHeight == '322px' && sliderSection.style.height == '322px'){
      sliderSection.style.maxHeight = '490px';
      sliderSection.style.height = '490px';
    } else {
      sliderSection.style.maxHeight = '322px';
      sliderSection.style.height = '322px';
    }
  }
  
});