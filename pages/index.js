// Импорт классов
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";


// Импорт переменных
import {
  initialCards,
  cardConteinerSelector,
  popupEdit,
  popupAdd,
  popupImage,
  formClasses
} from '../utils/constants.js';


// Переменные данных профиля
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');


// Переменные popup'a редактирования профиля
const nameInput = popupEdit.querySelector('#nameInput');
const jobInput = popupEdit.querySelector('#jobInput');


// Переменные popup'a добавления карточки
const titleInput = popupAdd.querySelector('#titleInput');
const pictureInput = popupAdd.querySelector('#pictureInput');


// Создание классов popup'ов
const EditPopup = new Popup(popupEdit);
const AddPopup = new Popup(popupAdd);
const ImagePopup = new PopupWithImage(popupImage);


// Установка обработчиков событий крестикам и оверлеям popap'ов
EditPopup.setEventListeners();
AddPopup.setEventListeners();
ImagePopup.setEventListeners();


// Добавление данных профиля на страницу
function editFormSubmit() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  EditPopup.closePopup();
}


// Функция создание экземпляра карточки
function cardInstance(elem) {
  const cardInstance = new Card(elem, '#card-template', (evt) => ImagePopup.openPopup(evt));
  return cardInstance.createCard();
}

// Добавление пользовательской карточки
function addFormSubmit(evt) {
  let cardItem = [
    {
      name: titleInput.value,
      link: pictureInput.value
    }
  ];
  const CardAdd = new Section({
    items: cardItem, renderer: (elem) => {
      const card = cardInstance(elem);
      CardAdd.setItem(card);
    }
  }, cardConteinerSelector);
  CardAdd.renderItems();// Вывод карточки на страницу
  AddPopup.closePopup();
  evt.target.reset();
}


// Добавление начальных карточек
const CardsList = new Section({
  items: initialCards.reverse(), renderer: (elem) => {
    const card = cardInstance(elem);
    CardsList.setItem(card);
  }
}, cardConteinerSelector);
CardsList.renderItems(); // Вывод карточек на страницу


// Назначение обрботчиков событий кнопкам формы профиля
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  EditFormValidator.resetFormError();
  EditFormValidator.toggleButtonState();
  EditPopup.openPopup();
});
popupEdit.addEventListener('submit', editFormSubmit);


// Назначение обрботчиков событий кнопкам формы добавления карточки
addButton.addEventListener('click', () => {
  if (titleInput.value === '' || pictureInput.value === '') {
    AddFormValidator.resetFormError();
    AddFormValidator.toggleButtonState();
  }
  AddPopup.openPopup();
});
popupAdd.addEventListener('submit', addFormSubmit);


// Создание классов валидации
const EditFormValidator = new FormValidator(formClasses, popupEdit);
const AddFormValidator = new FormValidator(formClasses, popupAdd);


// Запуск валидации
EditFormValidator.enableValidation();
AddFormValidator.enableValidation();
