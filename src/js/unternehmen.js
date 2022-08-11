window.addEventListener('DOMContentLoaded', ()=> {
    const slick = function() {
        var $slider = $('.unternehmen-slider');
        $slider.slick({
            slidesToShow: 1,
            infinite: true
        }); 
    }
    slick();


    const OpenDocWindow = function() {
        const slides = document.querySelectorAll('.unternehmen-slide'),
              window = document.querySelector('.unternehmen-documents'),
              close =  document.querySelector('.unternehmen-documents-close');
        slides.forEach((slide)=> {
            slide.addEventListener('click', ()=> {
                window.classList.remove('unternehmen-documents_hidden');
            });
        });
        close.addEventListener('click', ()=> {
            window.classList.add('unternehmen-documents_hidden');
        });
    }
    OpenDocWindow();
});

