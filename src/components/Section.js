export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    console.log("this._items", this._items);
    this._items.forEach(this._renderer);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
