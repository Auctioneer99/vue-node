<template>
  <div class="m-auto" style="width:400px;">
    <h1>Change Profile</h1>
    <form @submit.prevent="change">
      <div class="form-group">
        <label for="InputFirstName">First Name</label>
        <input tabindex="1" v-model="firstname" required type="text" class="form-control" id="InputFirstName" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputLastName">Last Name</label>
        <input tabindex="2" v-model="lastname" required type="text" class="form-control" id="InputLastName" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputAddress">Address</label>
        <input tabindex="3" v-model="address" required type="text" class="form-control" id="InputAddress" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputAbout">About</label>
        <textarea tabindex="4" v-model="about" required class="form-control" id="InputAbout" :disabled="disabled"> </textarea>
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Change</button><br><br>
    </form>
      <button class="btn btn-light btn-sm" @click="back">Back</button>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      firstname: "",
      lastname: "",
      address: "",
      about: "",
      disabled: false
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async change() {
      this.disabled = true;
      try {
        console.log(this.about)
        /*
        let data = new Login(this.mail, this.password);
        await this.$store.dispatch("signIn", data);
        let user = this.$store.state.auth.user;
        let authToken = await this.$store.getters.authToken;
        await this.$store.dispatch("getUser", {authToken: authToken, username: user.username});
        */
        //this.$router.push("/profile/" + user.username);
      } catch (error) {
          console.log('error signing in', error);
      }
      finally
      {
        this.disabled = false;
      }
    }
  }
}
</script>
