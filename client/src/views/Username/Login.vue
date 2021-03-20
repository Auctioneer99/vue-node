<template>
  <div class="m-auto" style="width:400px;">
    <h1>Change Login</h1>
    <form @submit.prevent="change">
      <div class="form-group">
        <label tabindex="1" for="InputEmail">Email address</label>
        <input v-model="mail" type="text" class="form-control" id="InputEmail" aria-describedby="emailHelp" disabled=true>
      </div>
      <div class="form-group">
        <label for="InputCurrentPassword">Current Password</label>
        <input tabindex="2" v-model="currentpassword" required type="password" class="form-control" id="InputCurrentPassword" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputNewPassword">New Password</label>
        <input tabindex="2" v-model="newpassword" required type="password" class="form-control" id="InputNewPassword" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputRepeatPassword">Repeat Password</label>
        <input tabindex="2" v-model="repeatpassword" required type="password" class="form-control" id="InputRepeatPassword" :disabled="disabled">
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Change</button><br><br>
    </form>
      <button class="btn btn-light btn-sm" @click="back">Back</button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      currentpassword: "",
      newpassword: "",
      repeatpassword: "",
      mail: "",
      disabled: false,
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async change() {
      this.disabled = true;
      try {
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
