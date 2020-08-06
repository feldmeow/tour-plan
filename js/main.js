$(document).ready(function () {
	// слайдер с картинками
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
	// слайдер с отзывами
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
	// Открыть-закрыть модальное окно
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
		event.preventDefault();
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		var bodyOverflow = $("body");
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
		bodyOverflow.removeClass("notOverflow");
	}
	// Закрыть модальное окно при нажатии ESC
	$(document).keydown(function (eventObject) {
		if (event.which == 27) {
			closeModal(eventObject);
		}
	});
	// Обработка форм (валидация)
	$(".form").each(function () {
		$(this).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},

				email: {
					required: true,
					email: true,
				},
				phone: {
					required: true,
					minlength: 16,
				},
			},
			messages: {
				name: {
					required: "Please specify your name",
					minlength: jQuery.validator.format(
						"At least {0} characters required!"
					),
				},

				email: {
					required: "We need your email address to contact you",
					email: "Email format is name@domain.com",
				},

				phone: {
					required: "Please enter a valid number",
					minlength: "Please enter a valid number",
				},
			},
		});
	});
	$(".phone").mask("+7(ZZZ)ZZZ-ZZ-ZZ", {
		watchDataMask: true,
		watchInterval: 100,
		translation: {
			Z: {
				pattern: /[0-9]/,
				optional: true,
			},
		},
	});
	AOS.init();

	$(".map").mousemove(function swap() {
		$(".map").html(
			'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7904.09828792573!2d98.29698905557251!3d7.88992770081096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sby!4v1596744698613!5m2!1sru!2sby"<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7904.09828792573!2d98.29698905557251!3d7.88992770081096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7065fac1e3d7c48!2sDoubleTree%20by%20Hilton%20Phuket%20Banthai%20Resort!5e0!3m2!1sru!2sby!4v1596744698613!5m2!1sru!2sby" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
		);
		$(".map").off("mousemove", swap);
	});
});
