<template>
  <div id="app">
    <HelloWorld msg="Demo render props"/>
    <Searchbar 
      v-bind:value="searchValue"
      v-on:input="updateValue"
    />
    <div class="flex">
      <ListContainer :input="searchValue"/>
    </div>
  </div>
</template>

<style>
.flex {
  display: flex;
}
</style>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Searchbar from './components/Searchbar/Searchbar.vue'
import ListContainer from './container/ListContainer.vue'

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
    }
  },
  components: {
    HelloWorld,
    Searchbar,
    ListContainer,
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
