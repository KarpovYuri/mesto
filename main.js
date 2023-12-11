(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:String(n)}var r=function(){function t(e){var n=e.data,r=e.userId,o=e.cardSelector,i=e.handleImageClick,u=e.handleTrashClick,a=e.handleLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=n,this._userId=r,this._cardSelector=o,this._cardElement=this._getTemplate(),this._handleImageClick=i,this._handleTrashClick=u,this._handleLike=a,this._cardPicture=this._cardElement.querySelector(".card__picture"),this._trashBtn=this._cardElement.querySelector(".card__trash"),this._likeBtn=this._cardElement.querySelector(".card__like-btn"),this._likeQty=this._cardElement.querySelector(".card__like-qty")}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"getId",value:function(){return this._data._id}},{key:"updateLikes",value:function(t){this._data=t,this._likeQty.textContent=t.likes.length,this._likeBtn.classList.toggle("card__like-btn_active")}},{key:"_setEventListeners",value:function(){var t=this;this._cardElement.querySelector(".card__like-btn").addEventListener("click",(function(){t._handleLike(t)})),this._data.owner._id===this._userId&&(this._trashBtn.classList.add("card__trash_active"),this._trashBtn.addEventListener("click",(function(){t._handleTrashClick(t)}))),this._cardPicture.addEventListener("click",this._handleImageClick)}},{key:"createCard",value:function(){var t=this;return this._cardPicture.src=this._data.link,this._cardPicture.alt=this._data.name,this._cardElement.querySelector(".card__title").textContent=this._data.name,this._likeQty.textContent=this._data.likes.length,this._data.likes.some((function(e){return e._id===t._userId}))&&this._likeBtn.classList.add("card__like-btn_active"),this._setEventListeners(),this._cardElement}},{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=""}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function u(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:String(e)}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=n,this._inputSelector=e.inputSelector,this._buttonElement=this._form.querySelector(e.submitButtonSelector),this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(){this._inputElement.classList.add(this._inputErrorClass),this._errorElement.textContent=this._inputElement.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(){this._inputElement.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_checkInputValidity",value:function(t){this._inputElement=t,this._errorElement=this._form.querySelector(".".concat(t.id,"-error")),this._inputElement.validity.valid?this._hideInputError():this._showInputError()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._inputElement=e,t._errorElement=t._form.querySelector(".".concat(e.id,"-error")),t._hideInputError()}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function s(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:String(e)}var f=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e.render(t)}))}},{key:"render",value:function(t){this.addItem(t)}},{key:"addItem",value:function(t){var e=this._renderer(t);this._container.prepend(e)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t,e){if("object"!=p(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:String(e)}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",(function(){t.closePopup()})),this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.closePopup()}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,v(r.key),r)}}function v(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:String(e)}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._picture=e._popup.querySelector(".popup__image"),e._signature=e._popup.querySelector(".popup__signature"),e}return e=u,(n=[{key:"openPopup",value:function(t){_(S(u.prototype),"openPopup",this).call(this),this._picture.src=t.target.src,this._picture.alt=this._signature.textContent=t.target.alt}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function P(t){var e=function(t,e){if("object"!=E(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==E(e)?e:String(e)}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._submitCallback=r,e._submitForm=e._submitForm.bind(O(e)),e._form=e._popup.querySelector(".popup__form"),e._inputs=Array.from(e._form.querySelectorAll(".popup__field")),e._submitButton=e._form.querySelector(".popup__submit-button"),e}return e=u,n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputs.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"closePopup",value:function(){C(L(u.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"_submitForm",value:function(){this._submitCallback(this._getInputValues(),this._submitButton)}},{key:"renderLoading",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Сохранение...";this._submitButton.textContent=t}},{key:"setEventListeners",value:function(){C(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitForm)}}],n&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,q(r.key),r)}}function q(t){var e=function(t,e){if("object"!=T(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==T(e)?e:String(e)}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return A(t)}(this,t)});function u(t){var e,n=t.popupSelector,r=t.submitCallback;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._submitCallback=r,e._submitForm=e._submitForm.bind(A(e)),e._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"_submitForm",value:function(){this._submitCallback(this.data)}},{key:"setEventListeners",value:function(){B(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitForm)}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,z(r.key),r)}}function z(t){var e=function(t,e){if("object"!=F(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==F(e)?e:String(e)}var N=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._about=n,this._profileAvatar=r}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._about.textContent=t.about,this._profileAvatar.src=t.avatar}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,H(r.key),r)}}function H(t){var e=function(t,e){if("object"!=J(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==J(e)?e:String(e)}var M,$=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._token=e.token}var e,n;return e=t,(n=[{key:"_handlingResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._token}}).then((function(e){return t._handlingResponse(e)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._token}}).then((function(e){return t._handlingResponse(e)}))}},{key:"addUserInfo",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._handlingResponse(t)}))}},{key:"addCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({link:t.link,name:t.name})}).then((function(t){return e._handlingResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._handlingResponse(t)}))}},{key:"setCardLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._handlingResponse(t)}))}},{key:"removeCardLike",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._handlingResponse(t)}))}},{key:"updateAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._handlingResponse(t)}))}}])&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),G=document.querySelector(".profile__name"),K=document.querySelector(".profile__about"),W=document.querySelector(".profile__avatar"),X=document.querySelector(".profile__edit-button"),Y=document.querySelector(".profile__add-button"),Z=document.querySelector(".profile__avatar-button"),tt={};function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var nt=new $({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39/",token:"e7a7c3fb-6194-4371-9a2c-b0a475e73e1c"});Promise.all([nt.getUserInfo(),nt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M=o._id,ot.setUserInfo(o),lt.renderItems(i)})).catch((function(t){return console.log(t)}));var rt,ot=new N(G,K,W),it=new I({popupSelector:"#popup-edit",submitCallback:function(t){it.renderLoading(),nt.addUserInfo(t).then((function(t){ot.setUserInfo(t),it.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){it.renderLoading("Сохранить")}))}}),ut=new I({popupSelector:"#popup-avatar",submitCallback:function(t){ut.renderLoading(),nt.updateAvatar(t).then((function(t){ot.setUserInfo(t),ut.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){ut.renderLoading("Сохранить")}))}}),at=new k("#popup-image"),ct=new V({popupSelector:"#popup-delete",submitCallback:function(t){nt.deleteCard(t.getId()).then((function(){t.deleteCard(),ct.closePopup()})).catch((function(t){return console.log(t)}))}}),lt=new f({renderer:function(t){var e=function(t){return new r({data:t,userId:M,cardSelector:"#card-template",handleImageClick:function(t){return at.openPopup(t)},handleTrashClick:function(t){ct.data=t,ct.openPopup()},handleLike:function(t){t._data.likes.some((function(t){return t._id===M}))?nt.removeCardLike(t.getId()).then((function(e){return t.updateLikes(e)})).catch((function(t){return console.log(t)})):nt.setCardLike(t.getId()).then((function(e){return t.updateLikes(e)})).catch((function(t){return console.log(t)}))}})}(t);return e.createCard()}},".cards"),st=new I({popupSelector:"#popup-add",submitCallback:function(t){st.renderLoading(),nt.addCard(t).then((function(t){lt.render(t),st.closePopup()})).catch((function(t){return console.log(t)})).finally((function(){st.renderLoading("Создать")}))}});it.setEventListeners(),st.setEventListeners(),at.setEventListeners(),ct.setEventListeners(),ut.setEventListeners(),X.addEventListener("click",(function(){var t=ot.getUserInfo();it.setInputValues(t),tt.profileForm.resetValidation(),it.openPopup()})),Y.addEventListener("click",(function(){tt.addForm.resetValidation(),st.openPopup()})),Z.addEventListener("click",(function(){tt.avatarForm.resetValidation(),ut.openPopup()})),rt={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__field_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(rt.formSelector)).forEach((function(t){var e=new a(rt,t),n=t.getAttribute("name");tt[n]=e,e.enableValidation()}))})();