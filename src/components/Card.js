// Класс карточки
export default class Card {
  constructor({
    data,
    userId,
    cardSelector,
    handleImageClick,
    handleTrashClick,
    handleSetLike,
    handleRemoveLike
  }) {
    this._data = data; // данные карточки
    this._userId = userId; // id пользователя
    this._cardSelector = cardSelector; // id шаблона карточки
    this._cardElement = this._getTemplate(); // разметка карточки
    this._handleImageClick = handleImageClick; // функция открытия popup'а изображения
    this._handleTrashClick = handleTrashClick; // функция открытия popup'а изображения
    this._handleSetLike = handleSetLike; // функция постановки лайка
    this._handleRemoveLike = handleRemoveLike; // функция удаления лайка
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


  // Установка обработчиков событий карточки
  _setEventListeners() {

    // Установка обработчика событий кнопке 'Like'
    this._cardElement.querySelector('.card__like-btn')
      .addEventListener('click', () => {
        if (this._likeBtn.classList.contains('card__like-btn_active')) {
          this._handleRemoveLike(this)
            .then((result) => {
              this._likeQty.textContent = result.likes.length;
              this._likeBtn.classList.remove('card__like-btn_active');
            })
            .catch((error) => console.log(error));
        } else {
          this._handleSetLike(this)
            .then((result) => {
              this._likeQty.textContent = result.likes.length;
              this._likeBtn.classList.add('card__like-btn_active');
            })
            .catch((error) => console.log(error));
        }
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
}
