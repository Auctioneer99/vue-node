<template>
  <div class="m-auto" style="width:400px;">
    <h1>Change Information</h1>
    <form @submit.prevent="change">
      <div class="form-group">
        <label for="InputTitle">Event Title</label>
        <input tabindex="1" v-model="title" required type="text" class="form-control" id="InputTitle" :disabled="disabled">
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Change</button><br><br>
    </form>
      <button class="btn btn-light btn-sm" @click="back">Back</button>
  </div>
</template>

<script>

export default {
  name: 'EventInformation',
  data() {
    return {
      title: "",
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
        console.log(this.pin)
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
