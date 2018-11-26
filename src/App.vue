<template>
  <div id="app">
    <HelloWorld msg="Demo renderless"/>
    <!-- <Searchbar 
      v-bind:value="searchValue"
      v-on:input="updateValue"
    /> -->
    <div class="flex">
      <!-- <ListContainer :input="searchValue"/> -->
      <!-- <list-container>
        <div class="flex" slot-scope="{ todos }">
          <no-list v-if="todos.length === 0"></no-list>
          <div class="flex">
            <list
              v-for="(todo, idx) in todos"
              v-bind:key="idx" 
              :data="todo"></list>
          </div>
        </div>
      </list-container> -->
      <enhanced-container>
        <div slot-scope="{ customClasses, customText }">
          <Button
            :text="customText('hello')"
            :classes="customClasses()"
            :action="alertUser"
            
          />
        </div>
      </enhanced-container>
    </div>
  </div>
</template>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
import EnhancedContainer from './container/EnhancedContainer.vue'

import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button/Button.vue'

export default {
  name: 'app',
  data() {
    return {
      searchValue: 'hello'
    }
  },
  methods: {
    updateValue(str) {
      this.searchValue = str

      const id = parseInt(this.searchValue)
      if (!isNaN(id)) {
        this.$store.dispatch('user/setUser', id)
      }
    },
    alertUser() {
      alert('zzzzz');
    }
  },
  components: {
    HelloWorld,
    EnhancedContainer,
    Button
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
