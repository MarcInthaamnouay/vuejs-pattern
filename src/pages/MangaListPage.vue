<template>
  <div>
    <async-manga-container></async-manga-container>
  </div>
</template>

<script>
import MangaPlaceholder from '../components/placeholder/MangaPlaceholder.vue'
import ErrorComponent from '../components/error/ErrorComponent.vue'

export default {
  name: 'MangaListPage',
  components: {
    AsyncMangaContainer: () => ({
      component: import('../container/manga/Manga.vue'),
      loading: MangaPlaceholder,
      error: ErrorComponent,
      delay: 10,
      timeout: 3000
    })
  },
}
</script>