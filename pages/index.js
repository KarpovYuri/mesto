// Переменные данных карточки
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;


// Переменные данных профиля
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');


// Выбор всех popup'ов
const popups = document.querySelectorAll('.popup')


// Переменные popup'a редактирования профиля
const popupEdit = document.querySelector('#popup-edit');
const nameInput = popupEdit.querySelector('#nameInput');
const jobInput = popupEdit.querySelector('#jobInput');


// Переменные popup'a добавления карточки
const popupAdd = document.querySelector('#popup-add');
const titleInput = popupAdd.querySelector('#titleInput');
const pictureInput = popupAdd.querySelector('#pictureInput');


// Переменные popup'a изображения
const popupImage = document.querySelector('#popup-image');
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
    popups.forEach((popup) => {
      if (popup.classList.contains('popup_opened')) {
        closePopup(popup);
      }
    })
  }
}

// Открытие popup'ов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  // Назначаем обработчик при открытии
  document.addEventListener('keydown', escapePress);
}


// Закрытие popup'ов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  // Удаляем обработчик при закрытии
  document.removeEventListener('keydown', escapePress);
}


// Добавление данных профиля на страницу
function editFormSubmit() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}


// Добавление пользовательской карточки
function addFormSubmit(evt) {
  const card = createCard(titleInput.value, pictureInput.value);
  addCard(card);
  closePopup(popupAdd);
  evt.target.reset();
}


// Создание карточки
function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__picture').src = link;
  cardElement.querySelector('.card__picture').alt = name;
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  });
  cardElement.querySelector('.card__trash').addEventListener('click', (evt) => {
    evt.target.parentElement.remove();
  });
  cardElement.querySelector('.card__picture').addEventListener('click', (evt) => {
    imageTeg.src = evt.target.src;
    imageTeg.alt = evt.target.alt;
    signatureTeg.textContent = evt.target.alt;
    openPopup(popupImage);
  });
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


// Назначение обрботчиков событий кнопкам формы профиля
editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
  enableValidation(popupEdit, formObject);
});
popupEdit.addEventListener('submit', editFormSubmit);


// Назначение обрботчиков событий кнопкам формы добавления карточки
addButton.addEventListener('click', () => {
  openPopup(popupAdd)
  enableValidation(popupAdd, formObject);
});
popupAdd.addEventListener('submit', addFormSubmit);


// Назначение обработчиков событий крестикам и overlay'ям
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
})
