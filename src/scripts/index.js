import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";

import "../pages/index.css";

// ELEMENTS //

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const config = {
  inputSelector: "popup__input",
  submitButtonSelector: "popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//Wrappers //
const modals = [...document.querySelectorAll(".popup")];
const modalAddSubmitButton = document.querySelector("#popup-submit-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-popup");
const profileAddModal = document.querySelector("#add-photo-popup");
const previewImageModal = document.querySelector("#preview-image-popup");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profilTitleInput = profileEditPopup.querySelector("#name-input");
const profileDescriptionInput = profileEditPopup.querySelector(
  "#owners-description"
);
const profileEditForm = document.querySelector("#edit-profile-form");
const profileAddForm = document.querySelector(".popup__form");
const ModalInputs = document.querySelectorAll(".popup__input");
const addCardModalTitleInput = document.querySelector("#image-title");
const addCardModalLinkInput = document.querySelector("#image-url");
const cardListEl = document.querySelector(".cards__list");
const profileAddButton = document.querySelector("#profile-add-button";)


// popup with form
const newCardPopup = new PopupWithForm(
  "#add-photo-popup",
  handleCardFormSubmit
);
newCardPopup.setEventListeners();
// edit popup form
const userInfo = new UserInfo(".profile__title", ".profile__description");
const popupEditForm = new PopupWithForm("#edit-popup", (formData) => {
  userInfo.setUserInfo(formData);
  popupEditForm.close();
});
popupEditForm.setEventListeners();
// popup with image
const popupImage = new PopupWithImage("#add-photo-popup");
popupImage.setEventListeners();

// section
function createCard(item) {
  const cardElement = new Card(item, "#card-template", handleImageClick);
  return cardElement.getView();
}

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    section.getView(cardElement);
    return cardElement;
  },
});

// functions
function handleCardFormSubmit(data) {
  const cardInput = createCard(data);
  cardListEl.prepend(cardInput);
  profileAddForm.reset();
  newCardPopup.close();
  return cardInput;
}

function handleImageClick(data) {
  popupImage.open(data);
}

const validationSettings = {
  inputSelector: "popup__input",
  submitButtonSelector: "popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormValidator = new FormValidation(
  validationSettings,
  profileEditForm
);
editFormValidator.enableValidation();

const addFormValidator = new FormValidation(validationSettings, profileAddForm);
addFormValidator.enableValidation();

//event listeners
profileEditButton.addEventListener("click", () => {
  const formData = userInfo.getUserInfo();
  popupEditForm.setInputValues(formData);
  popupEditForm.open();
});

// add new card button
profileAddButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  newCardPopup.open();
});

initialCards.forEach((data) => {
  const cardElement = createCard(data);
  cardListEl.prepend(cardElement);
});

modals.forEach((modalContainer) => {
  modalContainer.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("modal_opened")) {
      newCardPopup.close();
      popupEditForm.close();
    }
    if (evt.target.classList.contains("modal__close")) {
      newCardPopup.close();
      popupEditForm.close();
    }
  });
});