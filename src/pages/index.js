import "./index.css";

// import all the classes //

import Card from "../scripts/Card";
import FormValidator from "../scripts/FormValidator";
import Popup from "../scripts/Popup";
import PopupWithForm from "../scripts/PopupWithForm";
import UserInfo from "../scripts/UserInfo";
import Section from "../scripts/Section";
import {
  initialCards,
  config,
  profileEditButton,
  profileAddButton,
} from "../scripts/constants";
import PopupWithImage from "../scripts/PopupWithImage";

// class Instances //
const userInfo = new UserInfo("#profile-name", "#profile-description");
const profileEditPopup = new PopupWithForm("#edit-popup", (obj) => {
  handleProfileEditSubmit(obj);
});

const addPhotoPopup = new PopupWithForm("#add-photo-popup", (obj) => {
  handleAddPhotoSubmit(obj);
});
const fullPhotoPopup = new PopupWithImage("#popup-preview-image");
const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const newCard = createCard(cardData, "#card-template");
      section.addItem(newCard);
    },
  },
  ".cards__list"
);

// Form validation //

const FormValidators = {};

// enable validations //

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);

    //get the name of the form
    const formName =formElement.getAttribute("name");

    //stores a validator by the name of the form//
    FormValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

//Wrappers //

// const profileEditPopup = document.querySelector("#edit-popup"); ALREADY DECLARED, not needed
// const cardList = document.querySelector(".cards__list"); ALREADY DECLARED, not needed
//const addPhotoPopup = document.querySelector("#add-photo-popup"); ALREADY DECLARED, not needed


// Buttons //

// const profileName = document.querySelector("#profile-name"); ALREADY DECLARED, not needed
//const profileDescription = document.querySelector("#profile-description"); ALREADY DECLARED, not needed

// FORM INPUTS //


// const inputErrorClass.textContent = inputElements.validationMessage;

// FUNCTIONS //

function createCard(cardData, cardTemplate) {
  const cardElement = new Card(cardData, cardTemplate, (cardData) => {
    fullPhotoPopup.open(cardData);
  });
  return cardElement.getView();
}

function handleProfileEditSubmit(obj) {
  const cardData = {
    name: obj.title;
    link: obj.image;
  };
const newCard = createCard(cardData, "#card-template");
section.addItem(newcard);
}

// render the initial cards
section.renderItems();

// Event Listeners//
profileEditPopup.setEventListeners();
addPhotoPopup.setEventListeners();
fullPhotoPopup.setEventListeners();

//handle the profile edit popup
profileEditButton.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  profileEditPopup.setInputValues({ name, description });
  profileEditPopup.open();
  formValidators["edit_profile_form"].resetValidation();
});

//handle the photo add popup //
profileAddButton.addEventListener("click", () => {
  addPhotoPopup.open();
  formValidators["image_form"].resetValidation();
})
