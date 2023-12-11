import { ICard } from "../interfaces";

// Класс карточки
export default class Card {
  private _data: ICard;
  private _userId: number;
  private _cardSelector: string;
  private _cardElement: HTMLDivElement;
  private _handleImageClick: (
    e:
      | {
          target: { src: string; alt: string };
        }
      | MouseEvent
  ) => void;
  private _handleTrashClick: (card: this) => void;
  private _handleLike: (data: {}) => void;
  private _cardPicture: HTMLImageElement;
  private _trashBtn: HTMLButtonElement;
  private _likeBtn: HTMLButtonElement;
  private _likeQty: HTMLSpanElement;

  constructor({
    data,
    userId,
    cardSelector,
    handleImageClick,
    handleTrashClick,
    handleLike,
  }: {
    data: ICard;
    userId: number;
    cardSelector: string;
    handleImageClick: (e: { target: { src: string; alt: string } }) => void;
    handleTrashClick: (data: {}) => void;
    handleLike: (data: {
      _data: { likes: [] };
      getId: () => number;
      updateLikes: (result: {}) => void;
    }) => void;
  }) {
    this._data = data; // данные карточки
    this._userId = userId; // id пользователя
    this._cardSelector = cardSelector; // id шаблона карточки
    this._cardElement = this._getTemplate(); // разметка карточки
    this._handleImageClick = handleImageClick; // функция открытия popup'а изображения
    this._handleTrashClick = handleTrashClick; // функция открытия popup'а изображения
    this._handleLike = handleLike; // функция лайка
    this._cardPicture = this._cardElement.querySelector(".card__picture"); // изображение карточки
    this._trashBtn = this._cardElement.querySelector(".card__trash"); // кнопка удаления
    this._likeBtn = this._cardElement.querySelector(".card__like-btn"); // Cчетчик лайков
    this._likeQty = this._cardElement.querySelector(".card__like-qty"); // Cчетчик лайков
  }

  // Получение шаблона разметки
  _getTemplate() {
    const element: HTMLTemplateElement = document.querySelector(
      this._cardSelector
    );
    const cardElement = element.content
      .querySelector(".card")
      .cloneNode(true) as HTMLDivElement;
    return cardElement;
  }

  // Получение ID карточки
  getId() {
    return this._data._id;
  }

  // Изменение состояния лайка
  updateLikes(data: ICard) {
    this._data = data;
    this._likeQty.textContent = data.likes.length.toString();
    this._likeBtn.classList.toggle("card__like-btn_active");
  }

  // Установка обработчиков событий карточки
  _setEventListeners() {
    // Установка обработчика событий кнопке 'Like'
    this._cardElement
      .querySelector(".card__like-btn")
      .addEventListener("click", () => {
        this._handleLike(this);
      });

    // Установка обработчика событий кнопке удаления карточки
    if (this._data.owner._id === this._userId) {
      this._trashBtn.classList.add("card__trash_active");
      this._trashBtn.addEventListener("click", () => {
        this._handleTrashClick(this);
      });
    }

    // Установка обработчика событий изображению
    this._cardPicture.addEventListener("click", (evt) =>
      this._handleImageClick(evt)
    );
  }

  // Создание карточки
  createCard() {
    this._cardPicture.src = this._data.link;
    this._cardPicture.alt = this._data.name;
    this._cardElement.querySelector(".card__title").textContent =
      this._data.name;
    this._likeQty.textContent = this._data.likes.length.toString();
    if (
      this._data.likes.some((item: { _id: number }) => {
        return item._id === this._userId;
      })
    ) {
      this._likeBtn.classList.add("card__like-btn_active");
    }
    this._setEventListeners();
    return this._cardElement;
  }

  // Удаление карточки
  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}
