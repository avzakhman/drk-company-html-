let select  = function() {
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



var $slider = $('.fragen__cards');
$slider.slick({
    adaptiveHeight: true,
    slideShow: true
});



var $status = $('.pagingInfo');
var $slickElement = $('.slideshow');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});



$(window).on('load resize', function() {
    if ($(window).width() < 577) {
      $('.fragen__cards:not(.slick-initialized)').slick({
      });
    } else {
      $(".fragen__cards.slick-initialized").slick("unslick");
    }
});