<template>
  <div id="app">
    <HelloWorld msg="Demo placeholder & dynamic component"/>
    <div class="flex">
      <pic-container></pic-container>
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
import PicContainer from './container/Picture/PicContainer.vue'

export default {
  name: 'app',
  data() {
    return {
      love: false
    }
  },
  components: {
    HelloWorld,
    PicContainer,
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
