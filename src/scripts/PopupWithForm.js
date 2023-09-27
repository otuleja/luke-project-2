import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._form = this._popupquerySelector(".popup__form");
    this._popupForm = this._popupElement.querySelector("popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    const inputElements = this._popupForm.querySelectorAll(".popup__input");
    const inputValues = {};
    inputElements.forEach((inputElements) => {
      inputValues[inputElements.name] = inputElements.value;
    });
    return inputValues;
  }

  open() {
    super.open();
    this._button.textContent = "Save";
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  setInputValues(data) {
    const inputElements = this._popupForm.querySelectorAll(".popup__input");
    inputElements.forEach((input) => {
      if (data[input.name]) {
        input.value = data[input.name];
      }
    });
  }
}

// index.js

//const newCardPopup = new PopupWithForm("#new-card-popup", () => {});
//newCardPopup.open();

//newCardPopup.close();//
