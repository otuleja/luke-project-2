import { popups, openPopup, closePopup } from "../utils/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

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
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//Wrappers //

const profileEditPopup = document.querySelector("#edit-poup");
const profileEditForm = document.forms["#edit-profile-form"];
const cardList = document.querySelector("#cards__list");
const photoAddPopup = document.querySelector("#add-photo-popup");
const PhotoAddForm = document.querySelector["image_form"];

// Buttons //

const profileEditButton = document.querySelector("profile__edit-button");
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

function renderCard(cardData, cardList) {
  const cardElement = new Card(cardData, "#card-template");
  cardList.preprend(cardElement.getview());
}

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileName.innerText = profileNameInput.value;
  profileDescription.innertext = profileDescriptionInput.value;
  closePopup(profileEditPopup);
}

function handlePhotoAddSubmit(event) {
  evt.preventDefault();
  const cardData = {
    name: photoTitleInput.value,
    link: photoLinkInput.value,
  };
  const submitBtn = photoAddPopup.querySelector(".popup__button");
  renderCard(cardData, cardList);
  closePopup(photoAddPopup);
  photoAddForm.reset();
  submitBtn.disabled = true;
  submitBtn.classList.add("popup__button_disabled");
}

// EVENT LISTENERS //
//rendering the cards //

initialCardsCards.forEach((cardData) => {
  const cardElement = new Card(cardData, "#card-template");
  console.log(cardElement);
  cardList.append(cardElement.getview());
});

// Open edit profile popup //

profileEditButtton.addEventListener("click", function () {
  profileNameInput.value = profileName.innerText;
  profileDescriptionInput.value = profileDescription.innerText;
  openPopup(profileEditPopup);
});

// save the edit profile popup //

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

//add photo popup  SAVE//

photoAddButton.addEventListener("click", function () {
  openPopup(photoAddPopup);
});

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
const addFormValidator = new FormValidator(config, photoAddForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
