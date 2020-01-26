$(function () {

	var $btnDown = $(".scroll__top");
	$btnDown.on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 900)
	});
});