import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popupElement.querySelector(".popup__image-title");
    this._image = this._popupElement.querySelector(".popup__preview-image");
  }

  open(cardData) {
    super.open();
    this._image.src = cardData.link;
    this._image.alt = cardData.name;
    this._title.textContent = cardData.name;
  }
}
