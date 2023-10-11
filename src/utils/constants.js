export const initialCards = [
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
// buttons//

export const profileEditBtn = document.querySelector(".profile__edit-button");
export const profileEditModal = document.querySelector("#edit-popup");
export const profileModalCloseBtn =
  profileEditModal.querySelector(".popup__close");
export const profileModalName = document.querySelector(".popup__name");
export const profileModalTitle = document.querySelector(".popup__title");
export const profileName = document.querySelector(".profile__name");
export const profileTitle = document.querySelector(".profile__title");
export const addPicModal = document.querySelector("#add-popup");
export const addPicBtn = document.querySelector(".profile__add-button");
export const addPicModalCloseBtn = document.querySelector(".modal__close");
export const imageModal = document.querySelector("#popup-image");
export const imageModalCloseBtn = imageModal.querySelector(".modal__close");
export const cardList = document.querySelector(".cards__list");

export const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__text-underline-red",
  errorClass: "popup__error_visible",
};

export const profileModalForm = profileEditModal.querySelector(".popup__form");
