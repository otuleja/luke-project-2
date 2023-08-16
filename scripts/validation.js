// Elements //

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// Error message //

function showError(formElement, inputElement, { inputErrorClass, errorClass }) {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
}

function hideError(formElement, inputElement, { inputErrorClass, errorClass }) {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(errorClass);
}

// Validity checkers and input //

function checkInputValidity(formElement, inputElement, content) {
  if (!inputElement.validity.valid) {
    else showError(formElement, inputElement, content);
  }

  hideError(formElement, inputElement, content);
}
 
function hasInvalidInput(inputList) {
    return !inputList.every((inputElement) => inputElement.validity.valid); 
}

// Button state //

const disableButton = (submitButton, { inactiveButtonClass }) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
};

const enableButton = (submitButton, { inactiveButtonClass }) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
};

const toggleButtonState = (inputElements, submitButton, { inactiveButtonClass }) => {
  if (hasInvalidInput(inputElements)) {
    disableButton(submitButton, { inactiveButtonClass });
    return;
  }

  enableButton(submitButton, { inactiveButtonClass });
};

// Listeners and validation //

function setEventListeners(formElement, content) {
    const {inputSelector}= content;
    const inputElements = [...formElement.querySelectorAll(inputSelector)];
    const submitButton = formElement.querySelector(content.submitButtonSelector);
    inputElements.forEach((inputElement) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formElement, inputElement, content);
        toggleButtonState(inputEls, submitButton, content);
      });
    });

    toggleButtonState(inputElements, submitButton, content);
  }
   
  function enableValidation(content) {
    const formElements = [...document.querySelectorAll(content.formSelector)];
    formElements.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, content);
    });
  }

enableValidation(config);
