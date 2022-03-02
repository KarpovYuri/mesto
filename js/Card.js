// Класс карточки
export class Card {
  constructor(data, cardSelector, openPopup) {
    this._data = data; // данные карточки
    this._cardSelector = cardSelector; // id шаблона карточки
    this._openPopup = openPopup; // функция открытия popup'a
    this._cardElement = this._getTemplate(); // разметка карточки
  }


  // Получение шаблона разметки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }


  // Установка обработчика событий кнопке 'Like'
  _setEventListenerLike() {
    this._cardElement.querySelector('.card__like')
      .addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like_active');
      });
  }


  // Установка обработчика событий кнопке удаления карточки
  _setEventListenerTrash() {
    this._cardElement.querySelector('.card__trash')
      .addEventListener('click', (evt) => {
        evt.target.parentElement.remove();
      });
  }


  // Установка обработчика событий изображению
  _setEventListenerPicture() {
    this._cardElement.querySelector('.card__picture')
      .addEventListener('click', (evt) => {
        document.querySelector('.popup__image').src = evt.target.src;
        document.querySelector('.popup__image').alt =
          document.querySelector('.popup__signature').textContent = evt.target.alt;
        this._openPopup(document.querySelector('#popup-image'));
      });
  }


  // Создание карточки
  createCard() {
    this._cardElement.querySelector('.card__picture').src = this._data.link;
    this._cardElement.querySelector('.card__picture').alt = this._data.name;
    this._cardElement.querySelector('.card__title').textContent = this._data.name;
    this._setEventListenerLike();
    this._setEventListenerTrash();
    this._setEventListenerPicture();
    return this._cardElement;
  }
}
