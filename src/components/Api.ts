// Класс для общения с сервером
export default class Api {
  private _baseUrl: string;
  private _token: string;
  
  constructor(options: { baseUrl: string; token: string }) {
    this._baseUrl = options.baseUrl;
    this._token = options.token;
  }

  // Обработка ответа сервера
  _handlingResponse(result: Response) {
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
        authorization: this._token,
      },
    }).then((res) => this._handlingResponse(res));
  }

  // Запрос начальных карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._handlingResponse(res));
  }

  // Отправка данных профиля
  addUserInfo(data: { name: string; about: string }) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._handlingResponse(res));
  }

  // Отправка добавленной карточки
  addCard(data: { link: string; name: string }) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: data.link,
        name: data.name,
      }),
    }).then((res) => this._handlingResponse(res));
  }

  // Удаление карточки
  deleteCard(cardId: number) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._handlingResponse(res));
  }

  // Постановка лайка карточке
  setCardLike(cardId: number) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._handlingResponse(res));
  }

  // Снятие лайка карточки
  removeCardLike(cardId: number) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) => this._handlingResponse(res));
  }

  // Обновление аватара пользователя
  updateAvatar(data: { avatar: string }) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._handlingResponse(res));
  }
}
