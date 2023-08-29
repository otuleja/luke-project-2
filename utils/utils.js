const popups = document.querySelectorAll(".popup");

//Close popups when pressing "escape" //
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    popups.forEach((popup) => {
      const openedPopup = popup.classList.contains("popup_opened");
      if (openedPopup) {
        closePopup(popup);
      }
    });
  }
}

//opened popup and adding escape event listener //

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

// Closed popup and removing the escape event listener //

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

export { popups, openPopup, closePopup };
