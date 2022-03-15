// Класс открытия popup'ов
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupCloseButton = this._popupSelector.querySelector('.popup__close-button');
  }


  // Метод закрытия popup'а по нажатию Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }


  // Метод открытия popup'а
  openPopup() {
    this._popupSelector.classList.add('popup_opened');
    // Назначаем обработчик при открытии
    document.addEventListener('keydown', this._handleEscClose);
  }


  // Метод закрытия popup'а
  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    // Удаляем обработчик при закрытии
    document.removeEventListener('keydown', this._handleEscClose);
  }


  // Назначение обработчиков событий крестикам и overlay'ям
  setEventListeners() {
    this._popupCloseButton.addEventListener('click', () => {
      this.closePopup();
    });
    this._popupSelector.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
    });
  }

}
