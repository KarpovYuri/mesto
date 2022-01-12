const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__job');

const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
let nameInput = popup.querySelector('#nameInput');
let jobInput = popup.querySelector('#jobInput');


function popupOpen() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
popup.addEventListener('submit', formSubmit);
