<template>
  <div id="app">
    <HelloWorld msg="Demo component resolving using async vue component"/>
    <div class="flex">
      <manga-list-page></manga-list-page>
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
import MangaListPage from './pages/MangaListPage.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MangaListPage
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
