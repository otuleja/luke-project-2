import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._popupForm = this._popupElement.querySelector("popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputObj = {};
    this._inputs.forEach((input) => {
      inputObj[input.name] = input.value;
    });
    return inputObj;
  }

  //   add the submit event handler to the form and the click event listener to the close icon
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
  }

  //   to reset the form once the popup is closed.
  close() {
    this._popupForm.reset();
    super.close();
  }

  // set user information to form
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
