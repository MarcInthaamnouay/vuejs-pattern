<script>
import { mapState, mapGetters } from 'vuex' 
import Card from '../../components/card/card.vue'
import { fetchMixin } from '../../core/mixin/fetch'

import './scss/container.scss'

export default {
  name: 'Manga',
  mixins: [fetchMixin],
  computed: {
     ...mapGetters({
       mangas: 'manga/mangasByFilter'
    })
  },
  components: {
     Card
  },
  /**
   * Created
   */
  created() {
    this.get()
      .then(res => this.$store.dispatch('manga/setMangas', res))
      .catch(err => console.warn(err))
  },
  /**
   * Render
   * 
   * @return {Component}
   */
  render(h) {
    const mangas = this.mangas
    return (
      <div class="mangas">
        {mangas.map(m => {
          return (<Card data={m} />)
        })}
      </div>
    )
  }
}
</script>
