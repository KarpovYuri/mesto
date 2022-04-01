// Класс карточки
export default class Card {
  constructor({ data, userId, cardSelector, handleImageClick, handleTrashClick }) {
    this._data = data; // данные карточки
    this._userId = userId; // id пользователя
    this._cardSelector = cardSelector; // id шаблона карточки
    this._cardElement = this._getTemplate(); // разметка карточки
    this._cardId = this._data._id; // id карточки
    this._handleImageClick = handleImageClick; // функция открытия popup'а изображения
    this._handleTrashClick = handleTrashClick; // функция открытия popup'а изображения
    this._cardPicture = this._cardElement.querySelector('.card__picture'); // изображение карточки
    this._trashBtn = this._cardElement.querySelector('.card__trash'); // кнопка удаления
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


  // Установка обработчиков событий карточки
  _setEventListeners() {

    // Установка обработчика событий кнопке 'Like'
    this._cardElement.querySelector('.card__like-btn')
      .addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-btn_active');
      });

    // Установка обработчика событий кнопке удаления карточки
    if (this._data.owner._id === this._userId) {
      this._trashBtn.classList.add('card__trash_active');
      this._trashBtn.addEventListener('click', () => {
        this._handleTrashClick({
          cardElement: this._cardElement,
          cardId: this._data._id
        });
      });
    }

    // Установка обработчика событий изображению
    this._cardPicture.addEventListener('click', this._handleImageClick);

  }


  // Создание карточки
  createCard() {
    this._cardPicture.src = this._data.link;
    this._cardPicture.alt = this._data.name;
    this._cardElement.querySelector('.card__title').textContent = this._data.name;
    this._setEventListeners();
    return this._cardElement;
  }
}
