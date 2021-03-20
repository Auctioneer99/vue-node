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
          <tr v-for="(item, index) in eventsList" :key="index" @click="setActive($event)">
            <td>{{item.a}}</td><td>{{item.b}}</td><td>{{item.c}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-info float-right m-3">Add Event</button>
  </div>
</template>

<script>
  export default {
    name: 'Events',
    data() { 
      return {
        currentRow: null,
        eventsList: [
          {
            a: "a",
            b: "b",
            c: "c"
          }
        ]
      }
    },
    computed: {
      currentServerName() {
        return this.currentRow ? this.currentRow.children[1].innerHTML : null;
      },
      serverList() {
        return this.$store.state.game.serverList;
      }
    },
    methods: {
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