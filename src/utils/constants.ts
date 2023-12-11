// Объект классов необходимый для запуса валидации
export const formClasses = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__input-error_active",
};

// Селектор контейнера карточек
const cardConteinerSelector = ".cards";

// Переменные popup'а редактирования профиля
const profileName: HTMLHeadingElement =
  document.querySelector(".profile__name");
const profileAbout: HTMLParagraphElement =
  document.querySelector(".profile__about");
const profileAvatar: HTMLImageElement =
  document.querySelector(".profile__avatar");

// Кнопки открытия popup'ов
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const avatarButton = document.querySelector(".profile__avatar-button");

// Объект экземпляров класса FormValidator
const formValidators: { [key: string]: { resetValidation: () => void } } = {};

// Экспорт переменных
export {
  cardConteinerSelector,
  editButton,
  addButton,
  avatarButton,
  profileName,
  profileAbout,
  profileAvatar,
  formValidators,
};
