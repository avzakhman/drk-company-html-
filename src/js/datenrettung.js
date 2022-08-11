window.addEventListener('DOMContentLoaded', ()=> {
    const slick = function() {
        var $slider = $('.brands-slider');
        $slider.slick({
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768, // mobile breakpoint
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576, // mobile breakpoint
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }); 
    }
    slick();
});

