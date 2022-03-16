// Импорт главного файла стилей
import './index.css';

// Импорт классов
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";


// Импорт переменных
import {
  initialCards,
  cardConteinerSelector,
  popupEdit,
  popupAdd,
  editButton,
  addButton,
  profileName,
  profileJob,
  formClasses
} from '../utils/constants.js';


// Создание экземпляра класса данных пользователя
const userInfoInstance = new UserInfo(profileName, profileJob);


// Создание эксземпляра класса popup'а данных пользоввателя
const editPopup = new PopupWithForm({
  popupSelector: '#popup-edit',
  submitCallback: (formItems) => {
    userInfoInstance.setUserInfo(formItems);
    editPopup.closePopup();
  }
});


// Создание эксземпляра класса popup'а добавления пользовательской карточки
const addPopup = new PopupWithForm({
  popupSelector: '#popup-add',
  submitCallback: (formItems) => {
    const cardAdd = new Section({
      items: [formItems],
      renderer: (elem) => {
        const card = createCard(elem);
        cardAdd.setItem(card);
      }
    }, cardConteinerSelector);
    cardAdd.renderItems();// Вывод карточки на страницу
    addPopup.closePopup();
  }
});


// Создание эксземпляра класса popup'а изображения
const imagePopup = new PopupWithImage('#popup-image');


// Установка обработчиков событий крестикам и оверлеям popap'ов
editPopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();


// Функция создание экземпляра карточки
function createCard(elem) {
  const cardInstance = new Card({
    data: elem,
    cardSelector: '#card-template',
    handleCardClick: (e) => imagePopup.openPopup(e)
  });
  return cardInstance.createCard();
}


// Добавление начальных карточек
const cardsList = new Section({
  items: initialCards.reverse(), renderer: (elem) => {
    const card = createCard(elem);
    cardsList.setItem(card);
  }
}, cardConteinerSelector);
cardsList.renderItems(); // Вывод карточек на страницу


// Назначение обрботчиков событий кнопкам формы профиля
editButton.addEventListener('click', () => {
  const userData = userInfoInstance.getUserInfo();
  editPopup._inputs.forEach((item) => {
    if (item.id === 'nameInput') { item.value = userData.name; }
    if (item.id === 'jobInput') { item.value = userData.job; }
  });
  editFormValidator.resetFormError();
  editFormValidator.toggleButtonState();
  editPopup.openPopup();
});
editPopup.setEventListeners();


// Назначение обрботчиков событий кнопкам формы добавления карточки
addButton.addEventListener('click', () => {
  addFormValidator.resetFormError();
  addFormValidator.toggleButtonState();
  addPopup.openPopup();
});
addPopup.setEventListeners();


// Создание классов валидации
const editFormValidator = new FormValidator(formClasses, popupEdit);
const addFormValidator = new FormValidator(formClasses, popupAdd);


// Запуск валидации
editFormValidator.enableValidation();
addFormValidator.enableValidation();
