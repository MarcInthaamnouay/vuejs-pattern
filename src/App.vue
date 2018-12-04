<template>
  <div id="app">
    <HelloWorld msg="Demo base component"/>
    <form-layout>
      <div class="flex">
        <p>Base component used outside of layout component</p>
        <base-submit-button
          text="base component button"
        ></base-submit-button>
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
