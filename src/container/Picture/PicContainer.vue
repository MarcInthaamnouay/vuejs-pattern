<template>
  <div>
    <component :is="someComponent" />
  </div>
</template>

<script>
import NoData from '../../components/Alert/NoData.vue'
import { fetchMixin } from '../../core/mixin/fetch'
import { mapState, mapGetters } from 'vuex' 

import './scss/container.scss'

export default {
  name: 'PicContainer',
  mixins: [fetchMixin],
  computed: {
    ...mapGetters({
      photos: 'photos/getPhotos'
    }),
    someComponent() {
      if (this.photos.length === 0) {
        return () => import('../../components/Alert/NoData.vue')        
      }

      return () => import('../../container/List/List.vue')
    }
  },
  components: {
    NoData,
  },
  /**
   * Created
   */
  created() {
    this.get()
      .then(res => this.$store.dispatch('photos/setPhotos', res.data))
      .catch(err => console.warn('unable to get profiles'))
  }
}
</script>
