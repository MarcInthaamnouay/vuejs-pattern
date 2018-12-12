<template>
  <div class="placeholder">
    <single-placeholder></single-placeholder>
    <single-placeholder></single-placeholder>
    <single-placeholder></single-placeholder>
    <single-placeholder></single-placeholder>
  </div>
</template>

<style>
.placeholder {
  width: 100vw;
}
</style>

<script>
import SinglePlaceholder from './SinglePlaceholder.vue'

export default {
  name: 'MangaPlaceholder',
  components: {
    SinglePlaceholder
  }
}
</script>