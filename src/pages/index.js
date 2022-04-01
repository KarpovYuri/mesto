// Импорт главного файла стилей
import './index.css';


// Импорт классов
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";


// Импорт переменных
import {
  cardConteinerSelector,
  nameInput,
  aboutInput,
  editButton,
  addButton,
  profileName,
  profileAbout,
  profileAvatar,
  formClasses,
  formValidators
} from '../utils/constants.js';


// Переменная для id пользователя
let userId;


// Создание экземпляра класса общения с сервером
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39/',
  token: 'e7a7c3fb-6194-4371-9a2c-b0a475e73e1c'
});


// Начальная отрисовка данных профиля
api.getUserInfo()
  .then((result) => {
    userId = result._id;
    userInfoInstance.setUserInfo(result);
    userInfoInstance.setUserAvatar(result);
  })
  .catch(error => console.log(error));


// Создание экземпляра класса данных пользователя
const userInfoInstance = new UserInfo(profileName, profileAbout, profileAvatar);


// Создание эксземпляра класса popup'а данных пользоввателя
const editPopup = new PopupWithForm({
  popupSelector: '#popup-edit',
  submitCallback: (formItems) => {
    api.addUserInfo(formItems)
      .then(result => {
        userInfoInstance.setUserInfo(result);
        editPopup.closePopup();
      })
      .catch(error => console.log(error));
  }
});


// Создание эксземпляра класса popup'а изображения
const imagePopup = new PopupWithImage('#popup-image');


// Создание эксземпляра класса popup'а подтверждения удаления
const deletePopup = new PopupWithConfirm({
  popupSelector: '#popup-delete',
  submitCallback: (data) => {
    api.deleteCard(data.cardId)
      .then(() => {
        data.cardElement.remove();
        data.cardElement = '';
        deletePopup.closePopup();
      })
      .catch(error => console.log(error));
  }
});


// Функция создание экземпляра карточки
function createCard(elem) {
  const cardInstance = new Card({
    data: elem,
    userId: userId,
    cardSelector: '#card-template',
    handleImageClick: (e) => imagePopup.openPopup(e),
    handleTrashClick: (data) => {
      deletePopup.data = data;
      deletePopup.openPopup();
    },
    handleSetLike: data => {
      return api.setCardLike(data);
    },
    handleRemoveLike: data => {
      return api.removeCardLike(data);
    }
  });
  return cardInstance;
}


// Создание экземпляра класса секции карточек
const cardsList = new Section({
  renderer: (elem) => {
    const card = createCard(elem);
    return card.createCard();
  }
}, cardConteinerSelector);


// Отрисовка начальных карточек
api.getInitialCards()
  .then((result) => {
    cardsList.renderItems(result);
  })
  .catch(error => console.log(error));


// Добавление пользовательской карточки
const addPopup = new PopupWithForm({
  popupSelector: '#popup-add',
  submitCallback: (formItems) => {
    api.addCard(formItems)
      .then(result => {
        cardsList.render(result);
        addPopup.closePopup();
      })
      .catch(error => console.log(error));

  }
});


// Установка обработчиков событий крестикам и оверлеям popap'ов
editPopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();
deletePopup.setEventListeners();


// Назначение обрботчиков событий кнопке формы профиля
editButton.addEventListener('click', () => {
  const userData = userInfoInstance.getUserInfo();
  nameInput.value = userData.name;
  aboutInput.value = userData.about;
  formValidators.profileForm.resetValidation();
  editPopup.openPopup();
});


// Назначение обрботчиков событий кнопке формы добавления карточки
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
