// Класс карточки
export default class Card {
  constructor({
    data,
    userId,
    cardSelector,
    handleImageClick,
    handleTrashClick,
    handleLike
  }) {
    this._data = data; // данные карточки
    this._userId = userId; // id пользователя
    this._cardSelector = cardSelector; // id шаблона карточки
    this._cardElement = this._getTemplate(); // разметка карточки
    this._handleImageClick = handleImageClick; // функция открытия popup'а изображения
    this._handleTrashClick = handleTrashClick; // функция открытия popup'а изображения
    this._handleLike = handleLike; // функция лайка
    this._cardPicture = this._cardElement.querySelector('.card__picture'); // изображение карточки
    this._trashBtn = this._cardElement.querySelector('.card__trash'); // кнопка удаления
    this._likeBtn = this._cardElement.querySelector('.card__like-btn'); // Cчетчик лайков
    this._likeQty = this._cardElement.querySelector('.card__like-qty'); // Cчетчик лайков
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


  // Получение ID карточки
  getId() {
    return this._data._id;
  }

  // Изменение состояния лайка
  updateLikes(data) {
    this._likeQty.textContent = data.likes.length;
    this._likeBtn.classList.toggle('card__like-btn_active');
  }


  // Установка обработчиков событий карточки
  _setEventListeners() {

    // Установка обработчика событий кнопке 'Like'
    this._cardElement.querySelector('.card__like-btn')
      .addEventListener('click', () => {
        this._handleLike(this);
      });

    // Установка обработчика событий кнопке удаления карточки
    if (this._data.owner._id === this._userId) {
      this._trashBtn.classList.add('card__trash_active');
      this._trashBtn.addEventListener('click', () => {
        this._handleTrashClick(this);
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
    this._likeQty.textContent = this._data.likes.length;
    if (this._data.likes.some(item => item._id === this._userId)) {
      this._likeBtn.classList.add('card__like-btn_active');
    }
    this._setEventListeners();
    return this._cardElement;
  }

  // Удаление карточки
  deleteCard() {
    this._cardElement.remove();
    this._cardElement = '';
  }

}
