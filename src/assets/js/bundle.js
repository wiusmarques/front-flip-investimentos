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
    
    const slidesGoals = []
    for (let i=0; i<3; i++){
        slidesGoals[i] = new Swiper ('.slider-goals-'+i, {
            observer: true,
            observerParents: true,
            observeSlideChildren: true,
            watchOverflow: true,
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
    }
})



  
