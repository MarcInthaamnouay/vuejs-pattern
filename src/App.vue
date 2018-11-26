<template>
  <div id="app">
    <HelloWorld msg="Demo mixins with a pretty chinese girl"/>
    <div class="flex">
      <img :src="src" class="love" />
    </div>
  </div>
</template>

<style>
.love {
  margin: 0 auto;
}
</style>

<script>
import { fetchMixin } from './core/mixin/fetchMixin.js'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  mixins: [ fetchMixin ],
  data() {
    return {
      src: ''
    }
  },
  created() {
    this.get()
      .then(res => {
        this.src = `data:image/jpeg;base64,${res}`
      })
      .catch(err => console.warn(err))
  },
  components: {
    HelloWorld,
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
