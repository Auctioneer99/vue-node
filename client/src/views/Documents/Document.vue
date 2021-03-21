<template>
  <div class="d-inline d-inline-flex flex-column h-100 w-100">
    <div class="row overflow-auto">
      <div class="col-9 mb-3 d-inline d-inline-flex flex-column mx-auto">

        <InfoBox v-bind:infoBoxData='information'/>

      </div>
    </div>
    <div>
    <button class="btn btn-info float-right" @click="deleteDoc">Delete</button>
    </div>
  </div>
</template>

<script>
import InfoBox from "@/components/InfoBox.vue";
import Attribute from "@/Scripts/Models/Attribute.js";
import InfoBoxData from "@/Scripts/Models/InfoBoxData.js";
import Document from "@/Scripts/Models/Document/Document.js";
import Groups from "@/Scripts/Models/Document/Groups.js";

export default {
  data() {
    return {
      document: new Document(
                  "Example document#23",
                  "C-1",
                  "none",
                  Groups.competitors
                ),
    }
  },
  computed: {
    information() {
      let attrs = [
        new Attribute("Document Title", this.document.title),
        new Attribute("Day", this.document.day),
        new Attribute("Document Content", this.document.content),
        new Attribute("For", this.document.group),
      ]
      let res = new InfoBoxData("Document information", attrs, "DocumentInformation");
      return res;
    },
  },
  props: {
    documentId: String
  },
  components: {
    InfoBox
  },
  methods: {
    deleteDoc() {
      console.log("deleting")
    }
  },
  mounted() {
    console.log(this.documentId)
    //this.event = this.$route.params;
  }
}
</script>
