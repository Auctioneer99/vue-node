<template>
  <div class="overflow-auto border m-3">
          <div class="fs-1 p-1 bg-info">
            <div class="d-inline h4">
              {{infoBoxData.header}}
            </div>
            <div class="float-right d-inline">
              <span @click="edit" class="material-icons" role="button">
                edit
              </span>   
            </div>
          </div>
          <div class="d-flex flex-column m-1">

            <TextContainer v-for="(item, index) in infoBoxData.attributes" v-bind:attribute="item" :key="index"/>

          </div>
        </div>
</template>

<script>
import TextContainer from "./TextContainer.vue";

export default {
  name: 'InfoBox',
  props: {
    infoBoxData: Object
  },
  components: {
    TextContainer,
  },
  methods: {
    edit() {
      console.log(this.infoBoxData.url);
      this.$router.push({name: this.infoBoxData.url});
    }
  }
}
</script>

