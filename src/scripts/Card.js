import { openPopup, closePopup } from "./utils.js";

const fullPhotoPopup = document.querySelector("#popup-preview-image");

const previewPhoto = fullPhotoPopup.querySelector(".popup__image-preview");

const previewTitle = fullPhotoPopup.querySelector(".popup__image-title");

export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;

    this._cardSelector = document.querySelector(cardSelector);

    this._handleCardClick = handleCardClick;

    this._element = this._cardSelector.content
      .querySelector(".card")
      .cloneNode(true);
    this._likeButton = this._element.querySelector("#card__like-button");
    this._deleteButton = this._element.querySelector("#card__delete-button");
    this._cardImage = this._element.querySelector("#card__image");
    this._cardTitle = this._element.querySelector("#card__title");
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    //".card__like-button_active"

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    //".card__delete-button"

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._handlePhotoPopup();
    });
  }
  _setEventListeners() {
    //".card__like-button_active"

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    //".card__delete-button"

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  getView() {
    this._setEventListeners();

    this._cardImage.src = this._link;

    this._cardImage.alt = this._name;

    this._cardTitle.textContent = this._name;

    // return the card //
    return this._element;
  }
}

// camelCase
// PascalCase
