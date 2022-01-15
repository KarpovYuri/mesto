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

let cardPicture;
let cardTitle;
const cardsContainer = document.querySelector('.cards');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');

const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
let nameInput = popup.querySelector('#nameInput');
let jobInput = popup.querySelector('#jobInput');

//Функция открытия модального окна

function popupOpen() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

//Функция закрытия модального окна

function popupClose() {
  popup.classList.remove('popup_opened');
}

// Функция изменения данных профиля

function formSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

// Функция добавления карточки

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

// Слушатели открытия и закрытия модального окна

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popup.addEventListener('submit', formSubmit);
