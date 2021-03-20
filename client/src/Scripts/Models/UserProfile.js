class UserProfile {
  constructor(login, profile, pin, imgUrl = "#") {
    this.login = login;
    this.profile = profile;
    this.pin = pin;
    this.imgUrl = imgUrl;
  }
}
export default UserProfile;
