import Popup from './Popup.js';


// Класс popup'а формы
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._submit = this._submit.bind(this);
    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputs = Array.from(this._form.querySelectorAll('.popup__field'));
  }


  // Метод сбора данных всех полей формы
  _getInputValues() {
    const formData = {};
    this._inputs.forEach((input) => {
      formData[input.name] = input.value;
    });
    return formData;
  }


  // Перезаписываем родительский метод закрытия popup'а
  closePopup() {
    super.closePopup();
    this._form.reset();
  }


  // Метод Submit формы
  _submit() {
    this._submitCallback(this._getInputValues());
  }


  // Перезаписываем родительский метод назначения событий
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit);
  }
}
