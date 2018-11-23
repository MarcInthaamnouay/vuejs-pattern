<template>
  <div class="list" :id="data.completed ? 'done' : 'notdone'">
    <h3>ID: {{data.id}}</h3>
    <p>Title: {{data.title}}</p>
    <div class="action">
      <button @click="remove(data.id)">Delete</button>
      <button
        v-if="!data.completed"
        @click="complete(data.id)"
      >Completed</button>
    </div>
  </div>
</template>

<style lang="scss">
  .list {
    width: 20%;
    height: 150px;
    padding: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    margin: 10px;

    .action {
      button {
        width: 50%;
        height: 20px; 
        border-radius: 0px;
        box-shadow: 0px;
      }
    }
  }

  #done {
    border-bottom: 1px solid greenyellow;
  }

  #notdone {
    border-bottom: 1px solid red;
  }
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'List',
  methods: {
    ...mapActions({
      remove: 'todos/removeTodo',
      complete: 'todos/completeTodo'
    })
  },
  props: ['data']
}
</script>