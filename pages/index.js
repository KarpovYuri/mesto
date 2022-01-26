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


// Открытие popup'ов

function openPopup(popup) {
  popup.classList.add('popup_opened');
}


// Закрытие popup'ов

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


// Добавление данных профиля на страницу

function editFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}


// Добавление пользовательской карточки

function addFormSubmit(evt) {
  evt.preventDefault();
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


// Назначение обрботчиков событий кнопкам

editButton.addEventListener('click', (evt) => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
});

editCloseButton.addEventListener('click', closePopup.bind(null, popupEdit));
popupEdit.addEventListener('submit', editFormSubmit);
addButton.addEventListener('click', openPopup.bind(null, popupAdd));

addCloseButton.addEventListener('click', (evt) => {
  closePopup(popupAdd);
  evt.target.previousElementSibling.reset();
});

popupAdd.addEventListener('submit', addFormSubmit);
imageCloseButton.addEventListener('click', closePopup.bind(null, popupImage));
