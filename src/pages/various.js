const profileEditForm = document.querySelector("#edit-profile-form");

const addPhotoForm = addPhotoPopup.querySelector(".popup__form");
const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addPhotoForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const photoTitleInput = addPhotoPopup.querySelector("#image-title");
const photoLinkInput = addPhotoPopup.querySelector("#image-url");
const inputElements = document.querySelectorAll(".popup__input");

const profileNameInput = profileEditPopup.querySelector("#name-input");
const profileDescriptionInput = profileEditPopup.querySelector(
  "#owners-description"
);

const fullPhotoPopup = document.querySelector("#popup-preview-image");

const previewPhoto = fullPhotoPopup.querySelector(".popup__image-preview");

const previewTitle = fullPhotoPopup.querySelector(".popup__image-title");

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
  //creating the cards //
  
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, "#card-template");
    cardList.append(cardElement);
  });
  
  // Open edit profile popup //
  
  profileEditButton.addEventListener("click", function () {
    profileNameInput.value = profileName.innerText;
    profileDescriptionInput.value = profileDescription.innerText;
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
  
  popup.forEach((popup) => {
    popup.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("popup_opened")) {
        closePopup(popup);
      }
      if (event.target.classList.contains("popup__close")) {
        closePopup(popup);
      }
    });
  });
  