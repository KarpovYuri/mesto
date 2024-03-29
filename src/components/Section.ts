// Класс создания и вывода карточек на страницу
export default class Section {
  private _container: HTMLElement;
  private _renderer: (item: {}) => string | Node;

  constructor(
    renderer: (item: {}) => string | Node,
    containerSelector: string
  ) {
    this._renderer = renderer; // Функция формирования карточки
    this._container = document.querySelector(containerSelector); // контейнер карточек
  }

  // Отрисовка всех карточек
  renderItems(items: []) {
    items.reverse().forEach((item) => {
      this.render(item);
    });
  }

  // Отрисовка отдельного элемента
  render(item: {}) {
    this.addItem(item);
  }

  // Метод добавленя карточек в контейнер
  addItem(item: {}) {
    const card = this._renderer(item);
    this._container.prepend(card);
  }
}
