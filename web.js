var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// get top 

  // window.addEventListener('scroll', ()=> {
  //   document.querySelector('get-top').classList.toggle('show-top'),window.scrollY > 100;
  // })


  
