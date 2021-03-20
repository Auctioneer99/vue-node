<template>
  <div class="d-inline d-inline-flex flex-column h-100 w-100">
    <div class="row overflow-auto">
      <div class="col-3 mb-3 d-inline d-inline-flex flex-column">

        <div class="mx-auto m-3 h4">Image</div>
        <div class="mx-auto m-3">
          <img src="{{user.imageUrl}}" class="h-100">
        </div>
        <button class="btn-info btn mx-auto mt-3">Upload</button>
        <button class="btn-info btn mx-auto mt-3">Delete</button>

      </div>
      <div class="col-9 mb-3 d-inline d-inline-flex flex-column">

        <InfoBox v-bind:infoBoxData='login'/>

        <InfoBox v-bind:infoBoxData='profile'/>

        <InfoBox v-bind:infoBoxData='pin'/>

      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from "@/components/InfoBox.vue";
import Attribute from "@/Scripts/Models/Attribute.js";
import InfoBoxData from "@/Scripts/Models/InfoBoxData.js";
import Login from "@/Scripts/Models/Auth/Login.js";
import UserProfile from "@/Scripts/Models/UserProfile.js";
import ProfileData from "@/Scripts/Models/ProfileData.js";

export default {
  data() {
    return {
      user: new UserProfile(
        new Login("somemail@mail.ru", "***"),
        new ProfileData("1", "2", "tom", "none"),
        ""
      )
    }
  },
  computed: {
    login() {
      let attrs = [
        new Attribute("E-mail", this.user.login.mail),
        new Attribute("Password", this.user.login.password)
      ]
      let res = new InfoBoxData("Login information", attrs, "Login");
      return res;
    },
    profile() {
      let attrs = [
        new Attribute("First name", this.user.profile.firstname),
        new Attribute("Last name", this.user.profile.lastname),
        new Attribute("Address", this.user.profile.address),
        new Attribute("About", this.user.profile.about)
      ];
      let res = new InfoBoxData("Profile information", attrs, "Profile");
      return res;
    },
    pin() {
      let attrs = [
        new Attribute("PIN", this.user.pin),
      ];
      let res = new InfoBoxData("Personal Identification Number", attrs, "Pin");
      return res;
    },
    imageUrl() {
      return "#";
    }
  },
  components: {
    InfoBox
  },
  methods: {
  },
}
</script>
