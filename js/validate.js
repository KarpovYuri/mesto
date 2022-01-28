// Функция показа ошибки
function showInputError(form, inputElement, errorMessage, inputErrorClass, errorClass) {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};


// Функция скрытия ошибки
function hideInputError(form, inputElement, inputErrorClass, errorClass) {
  const errorElement = form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};


// Вызов функций показа/скрытия ошибок
function checkInputValidity(form, inputElement, inputErrorClass, errorClass) {
  if (!inputElement.validity.valid) {
    showInputError(form, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(form, inputElement, inputErrorClass, errorClass);
  }
};


// Проверка на валидность
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


// Переключение активности кнопки отправки формы и клавиши Enter
function toggleButtonState(inputList, buttonElement, inactiveButtonClass, inactiveEnterType, activeEnterType) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.type = inactiveEnterType;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.type = activeEnterType;
  }
};


// Функция запуска валидации
function enableValidation(popup, obj) {
  const form = popup.querySelector(obj.formSelector)
  const inputList = Array.from(form.querySelectorAll(obj.inputSelector));
  const buttonElement = form.querySelector(obj.submitButtonSelector);
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  toggleButtonState(inputList, buttonElement, obj.inactiveButtonClass, obj.inactiveEnterType, obj.activeEnterType);
  inputList.forEach((inputElement) => {
    hideInputError(form, inputElement, obj.inputErrorClass, obj.errorClass);
    inputElement.addEventListener('input', function () {
      checkInputValidity(form, inputElement, obj.inputErrorClass, obj.errorClass);
      toggleButtonState(inputList, buttonElement, obj.inactiveButtonClass, obj.inactiveEnterType, obj.activeEnterType);
    });
  });
};
