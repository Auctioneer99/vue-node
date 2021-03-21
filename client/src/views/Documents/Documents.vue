<template>
  <div class="m-0 h-100">
    <h1>Documents</h1>
    <div class="overflow-auto border">
      <table class="table table-borderless table-hover">
        <thead class="thead-light">
          <tr>
            <th>Document</th><th>Day</th><th>For</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in documentList" :key="index" @click="setActive($event)" @dblclick="change(index)">
            <td>{{item.title}}</td><td>{{item.day}}</td><td>{{item.group}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-info float-right m-3" @click="this.$router.push({name:'CreateEvent'})">Add Document</button>
  </div>
</template>

<script>
import Document from "@/Scripts/Models/Document/Document.js";
import Groups from "@/Scripts/Models/Document/Groups.js";

  export default {
    name: 'Documents',
    data() { 
      return {
        currentRow: null,
        documentList: [
          new Document(
            "Example document#23",
            "C-1",
            "none",
            Groups.competitors
          ),
          new Document(
            "Example document#1223",
            "C2",
            "none",
            Groups.experts
          ),
        ]
      }
    },
    methods: {
      change(id) {
        this.$router.push({name: 'Document', params: {documentId: id}})
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