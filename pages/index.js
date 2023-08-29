import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { popups, openPopup, closePopup } from "../utils/utils.js";

// ELEMENTS //

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.svg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.svg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.svg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.svg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.svg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-continputElementent.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.svg",
  },
];

const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_visible",
};

//Wrappers //

const profileEditPopup = document.querySelector("#edit-popup");
const profileEditForm = document.querySelector("#edit-profile-form");
const cardList = document.querySelector(".cards__list");
const addPhotoPopup = document.querySelector("#add-photo-popup");
const addPhotoForm = addPhotoPopup.querySelector(".popup__form");

// Buttons //

const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const profileAddButton = document.querySelector("#profile-add-button");

// FORM INPUTS //

const profileNameInput = profileEditPopup.querySelector("#name-input");
const profileDescriptionInput = profileEditPopup.querySelector(
  "#owners-description"
);
const photoTitleInput = addPhotoPopup.querySelector("#image-title");
const photoLinkInput = addPhotoPopup.querySelector("#image-url");

// FUNCTIONS //

function createCard(cardData, cardList) {
  const cardElement = new Card(cardData, cardList);
  return cardElement.getView();
}

function renderCard(cardData, cardList) {
  const cardElement = createCard(cardData, "#card-template");
  cardList.prepend(cardElement);
}

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileName.innerText = profileNameInput.value;
  profileDescription.innerText = profileDescriptionInput.value;
  closePopup(profileEditPopup);
}

function handleAddPhotoSubmit(event) {
  event.preventDefault();
  const cardData = {
    name: photoTitleInput.value,
    link: photoLinkInput.value,
  };
  renderCard(cardData, cardList);
  closePopup(addPhotoPopup);
  addPhotoForm.reset();
}

// EVENT LISTENERS //
//rendering the cards //

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, "card-template");
  cardList.append(cardElement);
});

// Open edit profile popup //

profileEditButton.addEventListener("click", function () {
  profileNameInput.value = profileName.innerText;
  profileDescriptionInput.value = profileDescription.innerText;
  editFormValidator.resetValidation();
  openPopup(profileEditPopup);
});

// save the edit profile popup //

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// open the photo popup //

profileAddButton.addEventListener("click", function () {
  addFormValidator.resetValidation();
  openPopup(addPhotoPopup);
});

//add photo popup  SAVE//

addPhotoForm.addEventListener("submit", handleAddPhotoSubmit);

// Overlay for open and close popup//

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (event.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

// EVENT HANDLERS //
const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addPhotoForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
