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

        <InfoBox v-bind:infoBoxData='information'/>

        <InfoBox v-bind:infoBoxData='dates'/>

        <InfoBox v-bind:infoBoxData='participants'/>

      </div>
    </div>
  </div>
</template>

<script>
import InfoBox from "@/components/InfoBox.vue";
import Attribute from "@/Scripts/Models/Attribute.js";
import InfoBoxData from "@/Scripts/Models/InfoBoxData.js";
import Event from "@/Scripts/Models/Event/Event.js";
import Dates from "@/Scripts/Models/Event/Dates.js";

export default {
  data() {
    return {
      event: new Event(
        "Example event",
        new Dates(
          new Date(1),
          new Date(1),
          new Date(1),
          new Date(1),
        ),
        12
      )
    }
  },
  computed: {
    information() {
      let attrs = [
        new Attribute("Event Title", this.event.title),
      ]
      let res = new InfoBoxData("Event information", attrs, "EventInformation");
      return res;
    },
    dates() {
      let attrs = [
        new Attribute("Start Date", this.event.dates.startdate.toShortDate()),
        new Attribute("C1 Date", this.event.dates.c1date.toShortDate()),
        new Attribute("C+1 Date", this.event.dates.cp1date.toShortDate()),
        new Attribute("Finish Date", this.event.dates.finishdate.toShortDate())
      ];
      let res = new InfoBoxData("Dates information", attrs, "Dates");
      return res;
    },
    participants() {
      let attrs = [
        new Attribute("Participants", this.event.participants),
      ];
      let res = new InfoBoxData("Participants", attrs, "Pin");
      return res;
    },
    imageUrl() {
      return "#";
    }
  },
  props: {
    eventId: String
  },
  components: {
    InfoBox
  },
  mounted() {
    console.log(this.eventId)
    //this.event = this.$route.params;
  }
}
</script>
