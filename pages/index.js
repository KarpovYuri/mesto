// Данные начальных карточек

const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// Переменные карточек

let cardPicture;
let cardTitle;
const cardsContainer = document.querySelector('.cards');


// Переменные профиля

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');


// Переменные popup'a редактирования профиля

const popupEdit = document.querySelector('#popup-edit');
const editCloseButton = popupEdit.querySelector('.popup__close-button');
let nameInput = popupEdit.querySelector('#nameInput');
let jobInput = popupEdit.querySelector('#jobInput');


// Переменные popup'a добавления карточки

const popupAdd = document.querySelector('#popup-add');
const addCloseButton = popupAdd.querySelector('.popup__close-button');
let titleInput = popupAdd.querySelector('#titleInput');
let pictureInput = popupAdd.querySelector('#pictureInput');


// Переменные popup'a изображения

const popupImage = document.querySelector('#popup-image');
const imageCloseButton = popupImage.querySelector('.popup__close-button');
let imageTeg = popupImage.querySelector('.popup__image');
let signatureTeg = popupImage.querySelector('.popup__signature');


// Открытие popup'ов

function popupOpen() {
  switch (this.id) {
    case 'edit-button':
      nameInput.value = profileName.textContent;
      jobInput.value = profileJob.textContent;
      popupEdit.classList.add('popup_opened');
      break;
    case 'add-button':
      popupAdd.classList.add('popup_opened');
      break;
    default:
      imageTeg.src = this.src;
      imageTeg.alt = this.alt;
      signatureTeg.textContent = this.alt;
      popupImage.classList.add('popup_opened');
  }
}

// Закрытие popup'ов

function popupClose() {
  switch (this.id) {
    case 'edit-close':
      popupEdit.classList.remove('popup_opened');
      break;
    case 'add-close':
      popupAdd.classList.remove('popup_opened');
      break;
    case 'image-close':
      popupImage.classList.remove('popup_opened');
      break;
  }
}


// Сохранение данных профиля

function editFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEdit.classList.remove('popup_opened');
}


// Сохранение данных карточки

function addFormSubmit(evt) {
  evt.preventDefault();
  cardTitle = titleInput.value;
  cardPicture = pictureInput.value;
  addCard();
  popupAdd.classList.remove('popup_opened');

  // Переназначение обрботчиков событий изображениям, кнопкам 'like' и 'trash' после добавления карточки
  pictures = cardsContainer.querySelectorAll('.card__picture');
  likes = cardsContainer.querySelectorAll('.card__like');
  trashes = cardsContainer.querySelectorAll('.card__trash');
  setButtonEventListener();
}


// Добавление HTML-кода карточки

function addCard() {
  cardsContainer.innerHTML = `
    <div class="card">
      <button type="button" aria-label="Иконка мусорного бака" class="card__trash fade-opacity"></button>
      <img src="${cardPicture}" alt="${cardTitle}" class="card__picture">
      <div class="card__info">
        <h2 class="card__title">${cardTitle}</h2>
        <button type="button" aria-label="Иконка сердечка" class="card__like"></button>
      </div>
    </div>
  ` + cardsContainer.innerHTML;
}


// Удаление карточки

function removeCard() {
  this.parentElement.remove();
}


// Добавление/Удаление лайка

function addLike() {
  if (this.classList[this.classList.length - 1] === 'card__like_active') {
    this.classList.remove('card__like_active');
  } else {
    this.classList.add('card__like_active');
  }
}


// Перебор изображений, кнопок 'like' и 'trash' с назначение обработчиков

function setButtonEventListener() {
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', popupOpen);
    likes[i].addEventListener('click', addLike);
    trashes[i].addEventListener('click', removeCard);
  }
}


// Вывод начальных 6 карточек

for (let i = 5; i >= 0; i--) {
  cardPicture = initialCards[i].link;
  cardTitle = initialCards[i].name;
  addCard();
}


// Назначение обрботчиков событий изображениям, кнопкам 'like' и 'trash'

let pictures = cardsContainer.querySelectorAll('.card__picture');
let likes = cardsContainer.querySelectorAll('.card__like');
let trashes = cardsContainer.querySelectorAll('.card__trash');
setButtonEventListener();


// Назначение обрботчиков событий остальных кнопок

editButton.addEventListener('click', popupOpen);
editCloseButton.addEventListener('click', popupClose);
popupEdit.addEventListener('submit', editFormSubmit);

addButton.addEventListener('click', popupOpen);
addCloseButton.addEventListener('click', popupClose);
popupAdd.addEventListener('submit', addFormSubmit);

imageCloseButton.addEventListener('click', popupClose);
