document.addEventListener("DOMContentLoaded", function(event) {
    const observer = lozad()
    observer.observe()

    var mySwiper = new Swiper ('.slider-home', {
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
})



  
