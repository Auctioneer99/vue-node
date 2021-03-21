<template>
  <div class="m-auto" style="width:400px;">
    <h1>Change Dates</h1>
    <form @submit.prevent="change">
      <div class="form-group">
        <label for="InputStartDate">Start Date</label>
        <input tabindex="1" v-model="startdate" required type="text" class="form-control" id="InputStartDate" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputC1Date">C1 Date</label>
        <input tabindex="2" v-model="c1date" required type="text" class="form-control" id="InputC1Date" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputC+1Date">C+1 Date</label>
        <input tabindex="3" v-model="cp1date" required type="text" class="form-control" id="InputC+1Date" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputFinishDate">Finish Date</label>
        <input tabindex="4" v-model="finishdate" required type="text" class="form-control" id="InputFinishDate" :disabled="disabled">
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Change</button><br><br>
    </form>
      <button class="btn btn-light btn-sm" @click="back">Back</button>
  </div>
</template>

<script>

export default {
  name: 'Dates',
  data() {
    return {
      startdate: "",
      c1date: "",
      cp1date: "",
      finishdate: "",
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
