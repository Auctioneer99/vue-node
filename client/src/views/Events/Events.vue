<template>
  <div class="m-0 h-100">
    <h1>Events</h1>
    <div class="overflow-auto border">
      <table class="table table-borderless table-hover">
        <thead class="thead-light">
          <tr>
            <th>Event</th><th>Dates</th><th>Participants</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in eventsList" :key="index" @click="setActive($event)" @dblclick="change(index)">
            <td>{{item.title}}</td><td>{{item.dates.toString()}}</td><td>{{item.participants}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-info float-right m-3" @click="this.$router.push({name:'CreateEvent'})">Add Event</button>
  </div>
</template>

<script>
import Event from "@/Scripts/Models/Event/Event.js";
import Dates from "@/Scripts/Models/Event/Dates.js";

  export default {
    name: 'Events',
    data() { 
      return {
        currentRow: null,
        eventsList: [
          new Event(
            "Example event#23",
            new Dates(
              new Date(2021, 0, 1),
              new Date(2021, 0, 3),
              new Date(2021, 0, 4),
              new Date(2021, 0, 6),
            ),
            24
          ),
          new Event(
            "Example event#123",
            new Dates(
              new Date(2021, 1, 1),
              new Date(2021, 1, 3),
              new Date(2021, 1, 4),
              new Date(2021, 1, 6),
            ),
            13
          ),
        ]
      }
    },
    methods: {
      change(id) {
        this.$router.push({name: 'Event', params: {eventId: id}})
      },
      setActive(event) {
        if (this.currentRow != null)
        {
          this.currentRow.classList.toggle("table-active");
        }
        if (this.currentRow == event.target.parentNode)
        {
          this.currentRow = null;
        }
        else
        {
          this.currentRow = event.target.parentNode;
          this.currentRow.classList.toggle("table-active");
        }
      }
    }
  }
</script>