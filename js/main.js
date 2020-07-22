var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  effect: "coverflow"
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [7.573638, 79.803867],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 11
  });

  var myPlacemark = new ymaps.Placemark(
    [7.573638, 79.803867],
    {},
    {
      preset: "islands#redIcon",
      iconCaption: "Очень длиннный, но невероятно интересный текст"
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
