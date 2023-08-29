import { openPopup } from "../utils/utils.js";

const fullPhotoPopup = document.querySelector("#popup-preview-image");
const previewPhoto = fullPhotoPopup.querySelector(".popup__image-preview");
const previewTitle = fullPhotoPopup.querySelector(".popup__image-title");

export default class Card {
  constructor({ name, link }, cardTemplateSelector) {
    this._Name = name;
    this._Link = link;
    this._CardTemplateSelector = cardTemplateSelector;

    this._Element = document
      .querySelector(this._CardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._LikeButton = this._Element.querySelector(".card__like-button");
    this._DeleteButton = this._Element.querySelector(".card__delete-button");
    this._CardImage = this._Element.querySelector(".card__image");
    this._CardTitle = this._Element.querySelector(".card__title");
  }

  _handleLikeIcon() {
    this._LikeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._Element.remove();
  }

  _handlePreviewPicture() {
    previewPhoto.src = this._Link;
    previewPhoto.alt = this._Name;
    previewTitle.innerText = this._Name;
    openPopup(fullPhotoPopup);
  }

  _handlePhotoPopup() {
    previewPhoto.src = this._Link;
    previewPhoto.alt = this._Name;
    previewTitle.innerText = this._Name;
    openPopup(fullPhotoPopup);
  }

  _setEventListeners() {
    //".card__like-button_active"
    this._LikeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    //".card__delete-button"
    this._DeleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._CardImage.addEventListener("click", () => {
      this._handlePhotoPopup();
    });
  }

  getView() {
    this._setEventListeners();

    this._CardImage.src = this._Link;
    this._CardImage.alt = this._Name;
    this._CardTitle.textContent = this._Name;

    return this._Element;
  }
}
