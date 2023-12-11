import Popup from "./Popup";

// Класс popup'а формы
export default class PopupWithForm extends Popup {
  private _submitCallback: (data: {}, button: HTMLButtonElement) => void;
  private _form: HTMLFormElement;
  private _inputs: HTMLInputElement[];
  private _submitButton: HTMLButtonElement;
  private _formValues: { [key: string]: string };
  constructor({
    popupSelector,
    submitCallback,
  }: {
    popupSelector: string;
    submitCallback: (data: {
      name: string;
      about: string;
      avatar: string;
      link: string;
    }) => void;
  }) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._submitForm = this._submitForm.bind(this);
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = Array.from(this._form.querySelectorAll(".popup__field"));
    this._submitButton = this._form.querySelector(".popup__submit-button");
  }

  // Метод сбора данных всех полей формы
  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  // Перезаписываем родительский метод закрытия popup'а
  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  setInputValues(data: { [key: string]: string }) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  // Метод Submit формы
  _submitForm() {
    this._submitCallback(this._getInputValues(), this._submitButton);
  }

  // Смена надписи кнопки сабмита при сохранении
  renderLoading(buttonText = "Сохранение...") {
    this._submitButton.textContent = buttonText;
  }

  // Перезаписываем родительский метод назначения событий
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitForm);
  }
}
