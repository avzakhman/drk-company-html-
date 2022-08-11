window.addEventListener('DOMContentLoaded', ()=> {

    //меню выбора в форме
    const select  = function() {
        let selectHeader = document.querySelectorAll(".select__header");
        let selectItem = document.querySelectorAll(".select__item");
        selectHeader.forEach(item=> {
            item.addEventListener('click', selectToggle)
        });
        selectItem.forEach(item=> {
            item.addEventListener('click', selectChoose)
        });
    
    
        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }
    
        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = this.closest('.select').querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
        }
    
    };
    select();
    
    

    //функция слайдера
    // const slick = function() {
    //     var $slider = $('.fragen__cards');
    //     $slider.slick({
    //         adaptiveHeight: true,
    //         slideShow: true,
    //         slidesToShow: 1
    //     });
        
    //     $(window).on('load resize', function() {
    //         if ($(window).width() < 577) {
    //           $('.fragen__cards:not(.slick-initialized)').slick({
    //           });
    //         } else {
    //           $(".fragen__cards.slick-initialized").slick("unslick");
    //         }
    //     });    
    // }
    // slick();
    
    

    //функция счётчика
    // const count = function() {
    //     var slider 		 = $('.fragen__cards');
    //     total        = slider.slick("getSlick").slideCount;
    //     currentSlide = $('.fragen__cards').slick('slickCurrentSlide');
    //     slide        = currentSlide + 1;
    //     if ( total > 1 ) {
    //         $(".sl-count__current").text(slide);
    //         $('.sl-count__total').text(total);
    //     }
    //     $(".fragen__cards").on('afterChange', function(event, slick, currentSlide, nextSlide){
    //         var currentSl = currentSlide + 1;
    //         $(".sl-count__current").text(currentSl);
    //     });
    // }
    // count();



    //функция слайдера
    const MainScreenSlider = function() {
        var $slider = $('.mainscreen-slider');
        $slider.slick({
            dots: true,
            fade: true,
            slidesToShow: 1,
            speed: 1000,
            autoplaySpeed: 7000,
            autoplay: true,
            arrows: false
        });
    }

    MainScreenSlider();

    //функция слайдера отзывов
    const kundenbewertungenSlider = function() {
        var $slider = $('.kundenbewertungen__slider');
        $slider.slick({fade: true});
    }

    kundenbewertungenSlider();





    const tabs = document.querySelectorAll('.fragen-tabs__card');

    tabs.forEach((tab)=> {
        tab.addEventListener('click', ()=> {
            let tabParagraph = tab.querySelector('.fragen-tabs__content'),
                button = tab.querySelector('.fragen-tabs__open');
            tabParagraph.classList.toggle('fragen-tabs__content_active');
            button.classList.toggle('fragen-tabs__open_active');

        })
    });

    //функция открытия хедера
    const openHeader = function() {
        const headerbutton = document.querySelector('.header-menu__button'),
        headermenu =   document.querySelector('.header-menu__body'),
        headerclose = document.querySelector('#menu-close');
    
        headerbutton.addEventListener('click', ()=> {
            headermenu.classList.toggle('header-menu__body_active');
            headerbutton.classList.toggle('header-menu__button_active');
        });
        headerclose.addEventListener('click', ()=> {
            headermenu.classList.remove('header-menu__body_active');
            headerbutton.classList.toggle('header-menu__button_active');
        });
    }
    openHeader();
    

    //вкладки в мобильном меню (нужно доделать)

    const   line1 = document.querySelector('#test-line_1'),
    line2 = document.querySelector('#test-line_2'),
    line3 = document.querySelector('#test-line_3');


        line1.addEventListener('click', ()=> {
        line1.classList.toggle('menu-mobile__option_contains_active');
        });

        line2.addEventListener('click', ()=> {
        line2.classList.toggle('menu-mobile__option_contains_active');
        });

        line3.addEventListener('click', ()=> {
        line3.classList.toggle('menu-mobile__option_contains_active');
        });

    //cookies window

    const AcceptCookies = function() {
        const cookiesWindow = document.querySelector('.cookies'),
              closeCookies = cookiesWindow.querySelector('.acceptCookies');

        closeCookies.addEventListener('click', ()=>{
            cookiesWindow.classList.add('cookies__hidden');
        })
    }
    AcceptCookies();


    scrollup = document.querySelector(".scrollUp");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollup.classList.remove('scrollUp__hidden');
        } else {
            scrollup.classList.add('scrollUp__hidden');
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    scrollup.addEventListener('click', ()=> {
        topFunction();
    });


    function shrinkHeader() {
        console.log('sheesh');
        const header = document.querySelector('.header');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            header.classList.add('header__shorter');
        } else {
            header.classList.remove('header__shorter');
        }
    }
    window.onscroll = function() {shrinkHeader()};

})



