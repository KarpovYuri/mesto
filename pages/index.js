import { Card } from "../js/Card.js";
import { FormValidator } from "../js/FormValidator.js";
import { initialCards } from "../js/initialCards.js";

// Контейнер карточек
const cardsContainer = document.querySelector('.cards');


// Переменные данных профиля
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');


// Выбор всех popup'ов
const popups = document.querySelectorAll('.popup');


// Переменные popup'a редактирования профиля
const popupEdit = document.querySelector('#popup-edit');
const nameInput = popupEdit.querySelector('#nameInput');
const jobInput = popupEdit.querySelector('#jobInput');


// Переменные popup'a добавления карточки
const popupAdd = document.querySelector('#popup-add');
const titleInput = popupAdd.querySelector('#titleInput');
const pictureInput = popupAdd.querySelector('#pictureInput');


// Объект классов необходимый для запуса валидации
const formClasses = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__input-error_active',
};


// Создание метода деактивации кнопки Submit
Object.prototype.disabledSubmitButton = function () {
  const submitButton = this.querySelector(formClasses.submitButtonSelector);
  submitButton.classList.add(formClasses.inactiveButtonClass);
  submitButton.disabled = true;
};


// Создание метода активации кнопки Submit
Object.prototype.enabledSubmitButton = function () {
  this.querySelector(formClasses.submitButtonSelector).classList
    .remove(formClasses.inactiveButtonClass);
};


// Создание метода очистки ошибок формы
Object.prototype.clearError = function () {
  const inputList = this.querySelectorAll(formClasses.inputSelector);
  inputList.forEach((inputElement) => {
    inputElement.classList.remove(formClasses.inputErrorClass);
    inputElement.nextElementSibling.classList.remove(formClasses.errorClass);
    inputElement.nextElementSibling.textContent = '';
  });
};


// Закрытие popup'ов по нажатию Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Открытие popup'ов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  // Назначаем обработчик при открытии
  document.addEventListener('keydown', closeByEsc);
}


// Закрытие popup'ов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  // Удаляем обработчик при закрытии
  document.removeEventListener('keydown', closeByEsc);
}


// Добавление данных профиля на страницу
function editFormSubmit() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}


// Добавление пользовательской карточки
function addFormSubmit(evt) {
  const cardInstance = new Card(
    { name: titleInput.value, link: pictureInput.value },
    '#card-template', openPopup);
  const card = cardInstance.createCard();
  addCard(card);
  closePopup(popupAdd);
  evt.target.reset();
}


// Вывод карточки на страницу
function addCard(card) {
  cardsContainer.prepend(card);
}


// Вывод начальных карточек
initialCards.reverse().forEach((elem) => {
  const cardInstance = new Card(elem, '#card-template', openPopup);
  const card = cardInstance.createCard();
  addCard(card);
});


// Назначение обрботчиков событий кнопкам формы профиля
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupEdit.clearError();
  popupEdit.enabledSubmitButton();
  openPopup(popupEdit);
});
popupEdit.addEventListener('submit', editFormSubmit);


// Назначение обрботчиков событий кнопкам формы добавления карточки
addButton.addEventListener('click', () => {
  if (titleInput.value === '' || pictureInput.value === '') {
    popupAdd.clearError();
    popupAdd.disabledSubmitButton();
  }
  openPopup(popupAdd);
});
popupAdd.addEventListener('submit', addFormSubmit);


// Назначение обработчиков событий крестикам
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});


// Назначение обработчиков событий overlay'ям
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  });
});


// Создание классов валидации
const editFormValidator = new FormValidator(formClasses, popupEdit);
const addFormValidator = new FormValidator(formClasses, popupAdd);


// Запуск валидации
editFormValidator.enableValidation();
addFormValidator.enableValidation();
