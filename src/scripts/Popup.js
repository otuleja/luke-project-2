export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupClose = this._popupElement.querySelector(".popup__close");
    this._popupImage = document.querySelector(".popup__image-preview");
  }
  open() {
    //opens popup
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    // closes popup
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (evt) => {
    // listens for esc button
    if (evt.key === "Escape") {
      this.close();
    }
  };
  setEventListeners() {
    // close button
    this._popupClose.addEventListener("click", () => {
      this.close();
    });
    // open button for preview image
    this._popupImage.addEventListener("click", () => {
      this.open();
    });
  }
}
