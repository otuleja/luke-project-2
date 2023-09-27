export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  }

  //   returns an objkect with info on the user to display the user data within the open form/ fields //
  getUserInfo() {
    this._userInfo = {
      name: this._name.textContent,
      description: this._job.textContent,
    };
    return this._userInfo;
  }

  //   intakes new user data to add onto the page //
  setUserInfo(nameInput, jobInput) {
    this._name.textContent = nameInput;
    this._job.textContent = jobInput;
  }
}
