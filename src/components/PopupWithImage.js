import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super{( popupSelector )};
    this._imageElement = this._popupElement.querySelector(".popup__image-title");
    this._imageCaption = this._popupElement.querySelector(".popup__preview-image");
  }

  open(data) {
    this._imageElement.src = data.link;
    this._imageElement.alt = data.name;
    this._imageCaption.textContent = data.name;
    super.open();
  }
}
