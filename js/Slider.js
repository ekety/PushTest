$(function () {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ['<img src="img/prev.png" alt="">', '<img src="img/next.png" alt="">'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
});