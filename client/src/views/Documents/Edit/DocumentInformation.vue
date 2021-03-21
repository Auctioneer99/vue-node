<template>
  <div class="m-auto" style="width:400px;">
    <h1>Change Information</h1>
    <form @submit.prevent="change">
      <div class="form-group">
        <label for="InputTitle">Document Title</label>
        <input tabindex="1" v-model="title" required type="text" class="form-control" id="InputTitle" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputDay">Day</label>
        <input tabindex="2" v-model="day" required type="text" class="form-control" id="InputDay" :disabled="disabled">
      </div>
      <div class="form-group">
        <label for="InputContent">Document Content</label>
        <textarea tabindex="3" v-model="content" required class="form-control" id="InputContent" :disabled="disabled"> </textarea>
      </div>
      <div class="form-check">
        <input v-model="group" :value="groups.experts" class="form-check-input" type="radio" name="flexRadioGroup" id="flexRadioExperts" checked>
        <label class="form-check-label" for="flexRadioExperts">
          {{groups.experts}}
        </label>
      </div>
      <div class="form-check">
        <input v-model="group" :value="groups.competitors" class="form-check-input" type="radio" name="flexRadioGroup" id="flexRadioCompetitors">
        <label class="form-check-label" for="flexRadioCompetitors">
          {{groups.competitors}}
        </label>
      </div>
      <button class="btn btn-light btn-lg" :disabled="disabled">Change</button><br><br>
    </form>
      <button class="btn btn-light btn-sm" @click="back">Back</button>
  </div>
</template>

<script>
import Groups from "@/Scripts/Models/Document/Groups.js";

export default {
  name: 'DocumentInformation',
  data() {
    return {
      title: "",
      day: "",
      content: "",
      groups: Groups,
      group: null,
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
