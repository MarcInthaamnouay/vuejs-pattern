<template>
  <div>
    <button-component
      title="Load"
      :func="showContainer"
    />
    <div v-if="display">
      <async-manga-container></async-manga-container>
    </div>
  </div>
</template>

<script>
import MangaPlaceholder from '../components/placeholder/MangaPlaceholder.vue'
import ErrorComponent from '../components/error/ErrorComponent.vue'
import ButtonComponent from '../components/button/Button.vue'

export default {
  name: 'MangaListPage',
  components: {
    AsyncMangaContainer: () => ({
      component: import('../container/manga/Manga.vue'),
      loading: MangaPlaceholder,
      error: ErrorComponent,
      delay: 10,
      timeout: 3000
    }),
    ButtonComponent
  },
  data() {
    return {
      display: false
    }
  },
  methods: {
    /**
     * Get Container
     */
    showContainer() {
      this.display = !this.display
    }
  }
}
</script>