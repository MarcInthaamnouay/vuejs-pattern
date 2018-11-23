<script>
import NoList from '../components/List/NoList.vue'
import List from '../components/List/List.vue'
import { fetchMixin } from '../core/mixin/fetch'
import { mapState, mapGetters } from 'vuex' 

import './scss/container.scss'

export default {
  name: 'ListContainer',
  mixins: [fetchMixin],
  computed: {
    ...mapGetters({
      todos: 'todos/todosByUser'
    })
  },
  /**
   * Created
   */
  created() {
    this.get()
      .then(res => this.$store.dispatch('todos/setTodos', res))
      .catch(err => console.warn('unable to get profiles'))
  },
  /**
   * Render
   * 
   * @return {Component}
   */
  render(h) {
    const todos = this.todos;
    return (
      <div>
        {todos.length === 0 ? (
          <NoList />
        ) : (
          <div class="container">{
            todos.map(d => {
              return <List data={d} />
            })
          }</div>
        )}
      </div>
    );
  }
}
</script>
