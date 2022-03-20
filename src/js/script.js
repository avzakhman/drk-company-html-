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
    slideShow: true,
    slidesToShow: 1
});

$(window).on('load resize', function() {
    if ($(window).width() < 577) {
      $('.fragen__cards:not(.slick-initialized)').slick({
      });
    } else {
      $(".fragen__cards.slick-initialized").slick("unslick");
    }
});




var slider 		 = $('.fragen__cards');
	total        = slider.slick("getSlick").slideCount;
	currentSlide = $('.fragen__cards').slick('slickCurrentSlide');
	slide        = currentSlide + 1;
if ( total > 1 ) {
	$(".sl-count__current").text(slide);
	$('.sl-count__total').text(total);
}
$(".fragen__cards").on('afterChange', function(event, slick, currentSlide, nextSlide){
	var currentSl = currentSlide + 1;
	$(".sl-count__current").text(currentSl);
});