<template>
  <div id="app">
    <HelloWorld msg="Demo layout component"/>
    <form-layout>
      <div class="flex">
        <p>A simple content over here. This can be a list of text or the rest of the form...</p>
      </div>
    </form-layout>
  </div>
</template>

<style>
.flex {
  display: flex;
}
</style>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormLayout from './components/Layout/Form/TheFormLayout.vue'

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
    FormLayout
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

.flex {
  background-color: #94C0FF;
}
</style>
