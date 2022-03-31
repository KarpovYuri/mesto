// Класс для общения с сервером
export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.token;
  }


  // Обработка ответа сервера
  _handlingResponse(result) {
    if (result.ok) {
      return result.json();
    } else {
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${result.status}`);
    }
  }


  // Запрос данных профиля
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._handlingResponse(res));
  }



  // Запрос начальных карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._handlingResponse(res));
  }


  // Отправка данных профиля
  addUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => this._handlingResponse(res));
  }


  // Отправка добавленной карточки
  addCard(data) {
    return fetch(`${this._baseUrl}cards`, this._headers, {
      method: "POST",
      body: JSON.stringify({
        link: data.link,
        name: data.name
      })
    })
      .then(res => this._handlingResponse(res))
      .catch(err => this._handlingError(err));
  }


  // Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, this._headers, {
      method: "DELETE"
    })
      .then(res => this._handlingResponse(res))
      .catch(err => this._handlingError(err));
  }

  // Постановка лайка карточке
  setCardLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, this._headers, {
      method: "PUT"
    })
      .then(res => this._handlingResponse(res))
      .catch(err => this._handlingError(err));
  }


  // Снятие лайка карточки
  removeCardLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, this._headers, {
      method: "DELETE"
    })
      .then(res => this._handlingResponse(res))
      .catch(err => this._handlingError(err));
  }


  // Обновление аватара пользователя
  updateAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, this._headers, {
      method: "PATCH",
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => this._handlingResponse(res))
      .catch(err => this._handlingError(err));
  }

}
