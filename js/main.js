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

