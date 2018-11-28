<template>
  <div class="no-list">
    <placeholder></placeholder>
    <placeholder></placeholder>
    <placeholder></placeholder>
    <placeholder></placeholder>
  </div>
</template>

<script>
import Placeholder from '../Placeholder/Placeholder.vue'

export default {
  name: 'NoData',
  components: {
    Placeholder
  }
}
</script>

<style lang="scss">
.no-list {
  width: 95vw;
  height: 100%;
}
</style>