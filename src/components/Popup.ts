// Класс открытия popup'ов
export default class Popup {
  public _popup: HTMLElement;
  private _popupCloseButton: HTMLButtonElement;
  constructor(popupSelector: string) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseButton = this._popup.querySelector(".popup__close-button");
  }

  // Метод закрытия popup'а по нажатию Esc
  _handleEscClose(evt: { key: string }) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  // Метод открытия popup'а
  openPopup() {
    this._popup.classList.add("popup_opened");
    // Назначаем обработчик при открытии
    document.addEventListener("keydown", this._handleEscClose);
  }

  // Метод закрытия popup'а
  closePopup() {
    this._popup.classList.remove("popup_opened");
    // Удаляем обработчик при закрытии
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Назначение обработчиков событий крестикам и overlay'ям
  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.closePopup();
    });
    this._popup.addEventListener("mousedown", (evt) => {
      if ((evt.target as Element).classList.contains("popup_opened")) {
        this.closePopup();
      }
    });
  }
}
