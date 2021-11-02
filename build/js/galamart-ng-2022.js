

$(function () {
    $('.js-best-gift-more').on('click', function (){
        $(this).addClass('d-none');
        $('.best-gift__body').removeClass('d-none');
    })
})

const swiperCollection = new Swiper('.swiper-collection', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-collection-button-next',
        prevEl: '.swiper-collection-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        }
    }
});

const swiperAction = new Swiper('.swiper-action', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        }
    }
});

const swiperGarland = new Swiper('.swiper-garland', {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-garland-button-next',
        prevEl: '.swiper-garland-button-prev',
    },
    breakpoints: {
        320:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    }
});

const swiperVideo = new Swiper('.swiper-video', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
});


