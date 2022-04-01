// Класс информации о пользователе
export default class UserInfo {
  constructor(profileName, profilAbout, profileAvatar) {
    this._name = profileName;
    this._about = profilAbout;
    this._profileAvatar = profileAvatar;
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return userData;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
    this._profileAvatar.src = userData.avatar;
  }

}
