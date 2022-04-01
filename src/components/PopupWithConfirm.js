import Popup from './Popup.js';


// Класс popup'а формы
export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._submitForm = this._submitForm.bind(this);
    this._form = this._popup.querySelector('.popup__form');
  }


  // Метод Submit формы
  _submitForm() {
    this._submitCallback(this.data);
  }


  // Перезаписываем родительский метод назначения событий
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm);
  }
}
