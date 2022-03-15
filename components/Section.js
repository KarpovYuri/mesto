// Класс создания и вывода карточек на страницу
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items; // Массив данных карточек
    this._renderer = renderer; // Функция формирования карточки
    this._container = document.querySelector(containerSelector); // контейнер карточек
  }


  // Метод вывода карточек на страницу
  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }


  // Метод добавленя карточек в контейнер
  setItem(element) {
    this._container.prepend(element);
  }
}
