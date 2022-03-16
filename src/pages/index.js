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
  nameInput,
  jobInput,
  editButton,
  addButton,
  profileName,
  profileJob,
  formClasses,
  formValidators
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


// Создание эксземпляра класса popup'а изображения
const imagePopup = new PopupWithImage('#popup-image');


// Функция создание экземпляра карточки
function createCard(elem) {
  const cardInstance = new Card({
    data: elem,
    cardSelector: '#card-template',
    handleCardClick: (e) => imagePopup.openPopup(e)
  });
  return cardInstance;
}


// Добавление начальных карточек
const cardsList = new Section({
  items: initialCards,
  renderer: (elem) => {
    const card = createCard(elem);
    return card.createCard();
  }
}, cardConteinerSelector);
cardsList.renderItems();


// Добавление пользовательской карточки
const addPopup = new PopupWithForm({
  popupSelector: '#popup-add',
  submitCallback: (formItems) => {
    cardsList.render(formItems);
    addPopup.closePopup();
  }
});


// Установка обработчиков событий крестикам и оверлеям popap'ов
editPopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();


// Назначение обрботчиков событий кнопкам формы профиля
editButton.addEventListener('click', () => {
  const userData = userInfoInstance.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  formValidators.profileForm.resetValidation();
  editPopup.openPopup();
});


// Назначение обрботчиков событий кнопкам формы добавления карточки
addButton.addEventListener('click', () => {
  formValidators.addForm.resetValidation();
  addPopup.openPopup();
});


// Функция запуска валидации
function enableValidation(formClasses) {
  const formList = Array.from(document.querySelectorAll(formClasses.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formClasses, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}


// Включение валидации
enableValidation(formClasses);
