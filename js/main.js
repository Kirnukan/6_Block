const mobileWidth = 320;
const miniDesktopWidth = 768;
const desktopWidth = 1120;
var swiperList = document.querySelector('.swiper-container').swiper;

if(window.innerWidth >= miniDesktopWidth){
var swiperList =  new Swiper('.swiper-container',{
    slidesPerView: 'auto',
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    spaceBetween: 16,
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
} 
