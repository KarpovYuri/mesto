// Класс информации о пользователе
export default class UserInfo {
  constructor(profileName, profilAbout, profileAvatar) {
    this._name = profileName;
    this._about = profilAbout;
    this._profileAvatar = profileAvatar;
  }


  // Получение данных пользователя
  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent
    };
    return userData;
  }


  // Запись данных пользователя на страницу
  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
    this._profileAvatar.src = userData.avatar;
  }

}
