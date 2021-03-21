<template>
  <div class="m-auto" style="width:400px;">
    <h1>New Event</h1>
    <form @submit.prevent="create">
      <div class="form-group">
        <label for="InputTitle">Event Title</label>
        <input tabindex="1" v-model="title" required type="text" class="form-control" id="InputTitle" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputStartDate">Start Date</label>
        <input tabindex="2" v-model="startd" required type="text" class="form-control" id="InputStartDate" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputC1Date">C1 Date</label>
        <input tabindex="3" v-model="c1d" required type="text" class="form-control" id="InputC1Date" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputCPlus1Date">C+1 Date</label>
        <input tabindex="4" v-model="cp1d" required type="text" class="form-control" id="InputCPlus1Date" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputFinishDate">Finish Date</label>
        <input tabindex="5" v-model="finishd" required type="text" class="form-control" id="InputFinishDate" :disabled="disabled">
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Create</button><br><br>
    </form>
      <button class="btn btn-light btn-sm" @click="back">Back</button>
  </div>
</template>

<script>

export default {
  name: 'CreateEvent',
  data() {
    return {
      title: "",
      startd: "",
      c1date: "",
      cp1date: "",
      finishdate: "",
      disabled: false,
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async create() {
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
