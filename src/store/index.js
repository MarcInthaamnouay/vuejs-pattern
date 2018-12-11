import Vue from 'vue'
import Vuex from 'vuex'
import manga from './modules/manga'
import filter from './modules/filter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    manga,
    filter
  }
})