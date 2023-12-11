import Popup from "./Popup";

// Класс popup'а формы
export default class PopupWithConfirmation extends Popup {
  private _submitCallback: (data: {}) => void;
  private _form: HTMLFormElement;
  public data: {};
  constructor({
    popupSelector,
    submitCallback,
  }: {
    popupSelector: string;
    submitCallback: (data: {
      getId: () => number;
      deleteCard: () => void;
    }) => void;
  }) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._submitForm = this._submitForm.bind(this);
    this._form = this._popup.querySelector(".popup__form");
  }

  // Метод Submit формы
  _submitForm() {
    this._submitCallback(this.data);
  }

  // Перезаписываем родительский метод назначения событий
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitForm);
  }
}
