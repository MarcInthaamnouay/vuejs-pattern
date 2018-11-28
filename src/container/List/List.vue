<template>
  <div>
    <div
      v-for="photo in photos"
      :key="photo.id"
    >
      <main-card :data="photo" />    
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MainCard from '../../components/Card/MainCard.vue'

export default {
  name: 'List',
  computed: {
    ...mapGetters({
      photos: 'photos/getPhotos'
    })
  },
  components: {
    MainCard
  }
}
</script>