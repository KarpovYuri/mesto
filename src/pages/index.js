// Импорт главного файла стилей
import "./index.css";

// Импорт классов
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

// Импорт переменных
import {
  cardConteinerSelector,
  editButton,
  addButton,
  avatarButton,
  profileName,
  profileAbout,
  profileAvatar,
  formClasses,
  formValidators,
} from "../utils/constants.js";

// Переменная для id пользователя
let userId;

// Функция изменения текста кнопки на: «Сохранить»
function removeSaving(btn) {
  btn.textContent = "Сохранить";
}

// Создание экземпляра класса общения с сервером
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39/",
  token: "e7a7c3fb-6194-4371-9a2c-b0a475e73e1c",
});

// Начальная отрисовка данных профиля и карточек
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfoInstance.setUserInfo(userData);
    cardsList.renderItems(cards);
  })
  .catch((error) => console.log(error));

// Создание экземпляра класса данных пользователя
const userInfoInstance = new UserInfo(profileName, profileAbout, profileAvatar);

// Создание эксземпляра класса popup'а данных пользоввателя
const editPopup = new PopupWithForm({
  popupSelector: "#popup-edit",
  submitCallback: (formItems) => {
    editPopup.renderLoading();
    api
      .addUserInfo(formItems)
      .then((result) => {
        userInfoInstance.setUserInfo(result);
        editPopup.closePopup();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        editPopup.renderLoading("Сохранить");
      });
  },
});

// Создание эксземпляра класса popup'а обновления аватара
const avatarPopup = new PopupWithForm({
  popupSelector: "#popup-avatar",
  submitCallback: (formItems) => {
    avatarPopup.renderLoading();
    api
      .updateAvatar(formItems)
      .then((result) => {
        userInfoInstance.setUserInfo(result);
        avatarPopup.closePopup();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        avatarPopup.renderLoading("Сохранить");
      });
  },
});

// Создание эксземпляра класса popup'а изображения
const imagePopup = new PopupWithImage("#popup-image");

// Создание эксземпляра класса popup'а подтверждения удаления
const deletePopup = new PopupWithConfirmation({
  popupSelector: "#popup-delete",
  submitCallback: (data) => {
    api
      .deleteCard(data.getId())
      .then(() => {
        data.deleteCard();
        deletePopup.closePopup();
      })
      .catch((error) => console.log(error));
  },
});

// Функция создание экземпляра карточки
function createCard(elem) {
  const cardInstance = new Card({
    data: elem,
    userId: userId,
    cardSelector: "#card-template",
    handleImageClick: (e) => imagePopup.openPopup(e),
    handleTrashClick: (data) => {
      deletePopup.data = data;
      deletePopup.openPopup();
    },
    handleLike: (data) => {
      if (data._data.likes.some((item) => item._id === userId)) {
        api
          .removeCardLike(data.getId())
          .then((result) => data.updateLikes(result))
          .catch((error) => console.log(error));
      } else {
        api
          .setCardLike(data.getId())
          .then((result) => data.updateLikes(result))
          .catch((error) => console.log(error));
      }
    },
  });
  return cardInstance;
}

// Создание экземпляра класса секции карточек
const cardsList = new Section(
  {
    renderer: (elem) => {
      const card = createCard(elem);
      return card.createCard();
    },
  },
  cardConteinerSelector
);

// Добавление пользовательской карточки
const addPopup = new PopupWithForm({
  popupSelector: "#popup-add",
  submitCallback: (formItems) => {
    addPopup.renderLoading();
    api
      .addCard(formItems)
      .then((result) => {
        cardsList.render(result);
        addPopup.closePopup();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        addPopup.renderLoading("Создать");
      });
  },
});

// Установка обработчиков событий крестикам и оверлеям popap'ов
editPopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();
deletePopup.setEventListeners();
avatarPopup.setEventListeners();

// Назначение обрботчиков событий кнопке формы профиля
editButton.addEventListener("click", () => {
  const userData = userInfoInstance.getUserInfo();
  editPopup.setInputValues(userData);
  formValidators.profileForm.resetValidation();
  editPopup.openPopup();
});

// Назначение обрботчиков событий кнопке формы добавления карточки
addButton.addEventListener("click", () => {
  formValidators.addForm.resetValidation();
  addPopup.openPopup();
});

// Назначение обрботчиков событий кнопке формы обновления аватара
avatarButton.addEventListener("click", () => {
  formValidators.avatarForm.resetValidation();
  avatarPopup.openPopup();
});

// Функция запуска валидации
function enableValidation(formClasses) {
  const formList = Array.from(
    document.querySelectorAll(formClasses.formSelector)
  );
  formList.forEach((formElement) => {
    const validator = new FormValidator(formClasses, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
}

// Включение валидации
enableValidation(formClasses);
