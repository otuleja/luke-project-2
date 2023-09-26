export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  //   returns an objkect with info on the user to display the user data within the open form/ fields //
  getUserInfo() {
    const userInput = {
      name: this._name.textContent,
      description: this._job.textContent,
    };
    return userInput;
  }

  //   intakes new user data to add onto the page //
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.description;
  }
}
