import { popup, openPopup, closePopup } from "../utils/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  config,
  profileEditButton,
  profileAddButton,
} from "../utils/constants.js";
import "./index.css";

// Class instances //
const userInfo = new UserInfo("#profile-name", "#profile-description");
const editPopup = new PopupWithForm("#edit-popup", (object) => {
  handleProfileEditSubmit(object);
});
const addPhotoPopup = new PopupWithForm("#add-photo-popup", (object) => {
  handleAddPhotoSubmit;
});
const photoPopup = new PopupWithImage("#popup__preview-image");
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

/* ----------------------- */
/*     Form Validation     */
/* ----------------------- */
const formValidators = {};
// enable validation
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // here you get the name of the form
    const formName = formElement.getAttribute("name");

    // here you store a validator by the `name` of the form
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

/* ------------------ */
/*      Functions     */
/* ------------------ */

function createCard(cardData, cardTemplate) {
  const cardElement = new Card(cardData, cardTemplate, (cardData) => {
    photoPopup.open(cardData);
  });
  return cardElement.getView();
}

function handleProfileEditSubmit(object) {
  const { name, description } = object;
  userInfo.setUserInfo(name, description);
  editPopup.close();
}

function handlePhotoAddSubmit(object) {
  const cardData = {
    name: object.title,
    link: object.image,
  };
  const newCard = createCard(cardData, "#card-template");
  section.addItem(newCard);
}

// render initialcards
section.renderItems();

/* ----------------------- */
/*      Event Listner      */
/* ----------------------- */
// eneble event listeners in each form
editPopup.setEventListeners();
addPopup.setEventListeners();
photoPopup.setEventListeners();

// handle the profile edit popup
profileEditButton.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  editPopup.setInputValues({ name, description });
  editPopup.open();
  formValidators["edit_profile_form"].resetValidation();
});

// handle the photo add popup
addPhotoPopup.addEventListener("click", () => {
  addPopup.open();
  formValidators["image_form"].resetValidation();
});
