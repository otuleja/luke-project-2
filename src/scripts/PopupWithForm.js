import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector("popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const inputObject = {};
    this._inputs.forEach((input) => {
      inputObject[input.name] = input.value;
    });

    return inputObject;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (eventt) => {
      event.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }
}

// index.js

//const newCardPopup = new PopupWithForm("#new-card-popup", () => {});
//newCardPopup.open();

//newCardPopup.close();//
