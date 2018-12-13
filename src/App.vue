<template>
  <div id="app">
    <HelloWorld msg="Demo layout component"/>
    <button @click="loadAsync">Click to load async component</button>
    <form-layout>
      <add-form-component v-if="show"/>
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
import MultiplePlaceholder from './components/placeholder/MultiplePlaceholder.vue'
import ErrorComponent from './components/error/ErrorComponent.vue'


export default {
  name: 'app',
  data() {
    return {
      searchValue: 'hello',
      show: false
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
    loadAsync() {
      this.show = !this.show
    }
  },
  components: {
    HelloWorld,
    FormLayout,
    AddFormComponent: () => ({
      component: import('./components/form/AddForm.vue'),
      loading: MultiplePlaceholder,
      error: ErrorComponent,
      delay: 100,
      timeout: 3000
    })
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
