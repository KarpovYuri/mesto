import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  initialCards,
  cardConteinerSelector
} from '../utils/constants.js';


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
  let items = [
    {
      name: titleInput.value,
      link: pictureInput.value
    }
  ];
  const CardList = new Section({
    items: items, renderer: (elem) => {
      const cardInstance = new Card(elem, '#card-template', openPopup);
      const card = cardInstance.createCard();
      CardList.setItem(card);
    }
  }, cardConteinerSelector);
  CardList.renderItems();// Вывод карточки на страницу
  closePopup(popupAdd);
  evt.target.reset();
}


// Добавление начальных карточек
const CardList = new Section({
  items: initialCards.reverse(), renderer: (elem) => {
    const cardInstance = new Card(elem, '#card-template', openPopup);
    const card = cardInstance.createCard();
    CardList.setItem(card);
  }
}, cardConteinerSelector);
CardList.renderItems(); // Вывод карточек на страницу


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
