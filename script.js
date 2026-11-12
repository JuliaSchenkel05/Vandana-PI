const swiper = new Swiper(".meuSwiper", {

    slidesPerView: 4,
    spaceBetween: 10,

    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },

        1024: {
            slidesPerView: 4,
            spaceBetween: 15
        }
    }

});