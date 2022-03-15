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
  popupImage,
  editButton,
  addButton,
  profileName,
  profileJob,
  formClasses
} from '../utils/constants.js';


// Создание экземпляра класса данных пользователя
const UserInfoInstance = new UserInfo(profileName, profileJob);


// Создание эксземпляра класса popup'а данных пользоввателя
const EditPopup = new PopupWithForm({
  popupSelector: popupEdit,
  submitCallback: (formItems) => {
    UserInfoInstance.setUserInfo(formItems);
    EditPopup.closePopup();
  }
});


// Создание эксземпляра класса popup'а добавления пользовательской карточки
const AddPopup = new PopupWithForm({
  popupSelector: popupAdd,
  submitCallback: (formItems) => {
    const CardAdd = new Section({
      items: [formItems],
      renderer: (elem) => {
        const card = cardInstance(elem);
        CardAdd.setItem(card);
      }
    }, cardConteinerSelector);
    CardAdd.renderItems();// Вывод карточки на страницу
    AddPopup.closePopup();
  }
});


// Создание эксземпляра класса popup'а изображения
const ImagePopup = new PopupWithImage(popupImage);


// Установка обработчиков событий крестикам и оверлеям popap'ов
EditPopup.setEventListeners();
AddPopup.setEventListeners();
ImagePopup.setEventListeners();


// Функция создание экземпляра карточки
function cardInstance(elem) {
  const cardInstance = new Card({
    data: elem,
    cardSelector: '#card-template',
    handleCardClick: (e) => ImagePopup.openPopup(e)
  });
  return cardInstance.createCard();
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
  const userData = UserInfoInstance.getUserInfo();
  EditPopup._inputs.forEach((item) => {
    if (item.id === 'nameInput') { item.value = userData.name; }
    if (item.id === 'jobInput') { item.value = userData.job; }
  });
  EditFormValidator.resetFormError();
  EditFormValidator.toggleButtonState();
  EditPopup.openPopup();
});
EditPopup.setEventListeners();


// Назначение обрботчиков событий кнопкам формы добавления карточки
addButton.addEventListener('click', () => {
  AddFormValidator.resetFormError();
  AddFormValidator.toggleButtonState();
  AddPopup.openPopup();
});
AddPopup.setEventListeners();


// Создание классов валидации
const EditFormValidator = new FormValidator(formClasses, popupEdit);
const AddFormValidator = new FormValidator(formClasses, popupAdd);


// Запуск валидации
EditFormValidator.enableValidation();
AddFormValidator.enableValidation();
