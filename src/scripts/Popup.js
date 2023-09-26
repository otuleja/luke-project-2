export default class Popup {
  constructor({ popupSelector }) {
    // single Parameter constructor -> popup selector
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    // opens popup //
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
  }

  close() {
    //closes popup //
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeByEsca);
  }

  _closeByEscape = (event) => {
    // listens for the escape button key press //
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    // sets Event Listeners that adds an event listener to close the popup when overlay is clicked on or close button is clicked on //
    this._popupElement.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (event.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }
}
