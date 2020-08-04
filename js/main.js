$(document).ready(function () {
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

	var menuButton = $(".menu-button");
	menuButton.on("click", function () {
		$(".navbar-bottom").toggleClass("navbar-bottom_visible");
		$("body").toggleClass("notOverflow");
	});

	$(".menu-button").click(function () {
		$(this).toggleClass("is-active");
	});

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);
	function openModal() {
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		var bodyOverflow = $("body");
		modalOverlay.addClass("modal__overlay--visible");
		modalDialog.addClass("modal__dialog--visible");
		bodyOverflow.addClass("notOverflow");
	}
	function closeModal(event) {
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		var bodyOverflow = $("body");
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
		bodyOverflow.removeClass("notOverflow");
	}
	$(document).keydown(function (eventObject) {
		if (event.which == 27) {
			closeModal(eventObject);
		}
	});
});
