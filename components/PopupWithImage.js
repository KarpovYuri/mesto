import Popup from './Popup.js';


// Класс popup'а изображения
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._picture = this._popupSelector.querySelector('.popup__image');
    this._signature = this._popupSelector.querySelector('.popup__signature');
  }

  // Перезаписываем родительский метод
  openPopup(evt) {
    super.openPopup();
    this._picture.src = evt.target.src;
    this._picture.alt = this._signature.textContent = evt.target.alt;
  }
}
