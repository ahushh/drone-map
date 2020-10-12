ymaps.ready(init)

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [60.461106, 30.290483],
      zoom: 10,
    },
    {
      searchControlProvider: "yandex#search",
    }
  )

  myMap.geoObject.add(
    new ymaps.Placemark(
      [60.461106, 30.290483],
      {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#">База отдыха Орехово</a><br>' + '<span class="description">описание</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: `
<a href="content/1/1.jpg" data-lightbox="roadtrip">Image #2</a>
<a href="content/1/2.jpg" data-lightbox="roadtrip">Image #3</a>
<a href="content/1/3.jpg" data-lightbox="roadtrip">Image #4</a>`,
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: "футер",
        // Зададим содержимое всплывающей подсказки.
        hintContent: "подсказка",
      },
      {
        preset: "islands#circleIcon",
        iconColor: "#0095b6",
      }
    )
  )
}
