import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupimage = this._popupElement.querySelector(
      ".popup__image-preview"
    );
    this._popupImageDescription = this._popupElement.querySelector(
      ".popup__image-title"
    );
  }

  setEventListeners() {
    super.setEventListeners();
  }

  open(cardData) {
    if (cardData) {
      this._popupoimage.src = cardData.link;
      this._popupimage.alt = cardData.name;
      this._popupImageDescription.textContent = cardData.name;
    }
    super.open();
  }
  close() {
    super.close();
  }
}
