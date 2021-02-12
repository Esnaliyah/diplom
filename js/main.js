new Swiper('.swiper-container', {
    slidesPerView: false,
    loop: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: '.bullets',
        clickable: true
    },
    breakpoints: {
        
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true
        },
        962:{
            slidesPerView: 3
        }
    }
})