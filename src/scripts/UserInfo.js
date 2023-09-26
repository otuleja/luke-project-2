export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userInput = {
      name: this._name.textContent,
      description: this._job.textContent,
    };
    return userInput;
  }


  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.description;
  }
}
