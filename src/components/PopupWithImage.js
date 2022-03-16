import Popup from './Popup.js';


// Класс popup'а изображения
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._picture = this._popup.querySelector('.popup__image');
    this._signature = this._popup.querySelector('.popup__signature');
  }

  // Перезаписываем родительский метод
  openPopup(evt) {
    super.openPopup();
    this._picture.src = evt.target.src; // добавляем в popup' изображение
    this._picture.alt = this._signature.textContent = evt.target.alt; // добавляем в popup' подпись
  }
}
