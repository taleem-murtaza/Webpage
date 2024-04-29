$(document).ready(function(){
	$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  dots:true,
  autoplaySpeed: 2000,
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true
});
});
