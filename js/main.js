var hotelSlider = new Swiper(".hotel-slider", {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: ".hotel-slider__button--next",
		prevEl: ".hotel-slider__button--prev",
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	effect: "coverflow",
});

var reviewSlider = new Swiper(".reviews-slider", {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: ".reviews-slider__button--next",
		prevEl: ".reviews-slider__button--prev",
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	effect: "slide",
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
	document
		.querySelector(".navbar-bottom")
		.classList.toggle("navbar-bottom_visible");
	document.body.classList.toggle("notOverflow");
});

$(document).ready(function () {
	$(".menu-button").click(function () {
		$(this).toggleClass("is-active");
	});
});
