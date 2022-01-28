// Переменные данных карточки
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;


// Переменные данных профиля
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');


// Переменные popup'a редактирования профиля
const popupEdit = document.querySelector('#popup-edit');
const editCloseButton = popupEdit.querySelector('.popup__close-button');
const nameInput = popupEdit.querySelector('#nameInput');
const jobInput = popupEdit.querySelector('#jobInput');


// Переменные popup'a добавления карточки
const popupAdd = document.querySelector('#popup-add');
const addCloseButton = popupAdd.querySelector('.popup__close-button');
const titleInput = popupAdd.querySelector('#titleInput');
const pictureInput = popupAdd.querySelector('#pictureInput');


// Переменные popup'a изображения
const popupImage = document.querySelector('#popup-image');
const imageCloseButton = popupImage.querySelector('.popup__close-button');
const imageTeg = popupImage.querySelector('.popup__image');
const signatureTeg = popupImage.querySelector('.popup__signature');


// Объект классов необходимый для запуса валидации
const formObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__input-error_active',
  inactiveEnterType: 'button',
  activeEnterType: 'submit'
}


// Закрытие popup'ов по нажатию Esc
function escapePress(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup();
    if (popup.id === 'popup-add') popup.querySelector('.popup__form').reset();
  }
}

// Открытие popup'ов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  // Назначаем обработчик при открытии
  document.addEventListener('keydown', escapePress);
}


// Закрытие popup'ов
function closePopup() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  // Удаляем обработчик при закрытии
  document.removeEventListener('keydown', escapePress);
}


// Добавление данных профиля на страницу
function editFormSubmit() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}


// Добавление пользовательской карточки
function addFormSubmit(evt) {
  const card = createCard(titleInput.value, pictureInput.value);
  addCard(card);
  closePopup();
  evt.target.reset();
}


// Создание карточки
function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__picture').src = link;
  cardElement.querySelector('.card__picture').alt = name;
  cardElement.querySelector('.card__title').textContent = name;
  return cardElement;
}


// Вывод карточки на страницу
function addCard(card) {
  cardsContainer.prepend(card);
}


// Вывод начальных карточек
initialCards.reverse().forEach((elem) => {
  const card = createCard(elem.name, elem.link);
  addCard(card);
});


// Назначение обработчиков карточкам

cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('card__like')) {
    evt.target.classList.toggle('card__like_active');
  } else {
    if (evt.target.classList.contains('card__trash')) {
      evt.target.parentElement.remove();
    } else {
      if (evt.target.classList.contains('card__picture')) {
        imageTeg.src = evt.target.src;
        imageTeg.alt = evt.target.alt;
        signatureTeg.textContent = evt.target.alt;
        openPopup(popupImage);
      }
    }
  }
});


// Назначение обрботчиков событий кнопкам формы профиля
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
  enableValidation(popupEdit, formObject);
});
editCloseButton.addEventListener('click', closePopup);
popupEdit.addEventListener('submit', editFormSubmit);


// Назначение обрботчиков событий кнопкам формы добавления карточки
addButton.addEventListener('click', () => {
  openPopup(popupAdd)
  enableValidation(popupAdd, formObject);
});
addCloseButton.addEventListener('click', (evt) => {
  closePopup();
  evt.target.previousElementSibling.reset();
});
popupAdd.addEventListener('submit', addFormSubmit);


// Назначение обработчиков событий модального окна изображения
imageCloseButton.addEventListener('click', closePopup);


// Назначение обработчиков событий overlay'ям
popupEdit.addEventListener('click', (evt) => {
  if (evt.target.id === 'popup-edit') {
    closePopup();
  }
});
popupAdd.addEventListener('click', (evt) => {
  if (evt.target.id === 'popup-add') {
    closePopup();
    evt.target.querySelector('.popup__form').reset();
  }
});
popupImage.addEventListener('click', (evt) => {
  if (evt.target.id === 'popup-image') {
    closePopup();
  }
});
