<template>
  <div>
    <single-placeholder></single-placeholder>
    <single-placeholder></single-placeholder>
    <single-placeholder></single-placeholder>
    <single-placeholder></single-placeholder>
  </div>
</template>

<script>
import SinglePlaceholder from './SinglePlaceholder.vue'

export default {
  name: 'MangaPlaceholder',
  components: {
    SinglePlaceholder
  }
}
</script>