document.addEventListener("DOMContentLoaded", function(event) {
    const observer = lozad()
    observer.observe()

    const slideHome= new Swiper ('.slider-home', {
        autoplay:{
            delay: 6000,
        },
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
        },
        loop: true
    })
    
    slidesGoals = new Swiper ('.slider-goals', {
        observer: true,
        observerParents: true,
        observeSlideChildren: true,
        watchOverflow: true,
        slidesPerView:3,
        spaceBetween: 10,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints:{
            1200:{
                slidesPerView:2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1,
            }
        }
    })
    
})



  
