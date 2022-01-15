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
  popupAdd.classList.remove('popup_opened');
}


// Добавление карточки

function addCard() {
  cardsContainer.innerHTML = `
    <div class="card">
      <img src="${cardPicture}" alt="${cardTitle}" class="card__picture">
      <div class="card__info">
        <h2 class="card__title">${cardTitle}</h2>
        <img src="images/heart_disabled.svg" alt="Иконка сердечка" class="card__like">
      </div>
    </div>
  ` + cardsContainer.innerHTML;
}


// Вывод начальных 6 карточек

for (let i = 5; i >= 0; i--) {
  cardPicture = initialCards[i].link;
  cardTitle = initialCards[i].name;
  addCard();
}


// Обработчики событий кнопок

editButton.addEventListener('click', popupOpen);
editCloseButton.addEventListener('click', popupClose);
popupEdit.addEventListener('submit', editFormSubmit);

addButton.addEventListener('click', popupOpen);
addCloseButton.addEventListener('click', popupClose);
popupAdd.addEventListener('submit', addFormSubmit);
