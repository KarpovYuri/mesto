// Класс информации о пользователе
export default class UserInfo {
  constructor(profileName, profilJob) {
    this._name = profileName;
    this._job = profilJob;
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userData;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._job.textContent = userData.job;
  }
}
