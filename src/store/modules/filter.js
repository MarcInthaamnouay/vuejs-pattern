const state = {
  value: ''
}

/**
 * Getters
 */
const getters = {
  /**
   * Get Filter
   * 
   * @param {Object} state
   * @return {String}
   */
  getFilter(state) {
    return state.value  
  }
}

/**
 * Actions
 */
const actions = {
  /**
   * Set Filter
   * 
   * @param {Function} commit
   * @param {String} value
   * @return {String} value
   */
  setFilter({ commit }, value) {
    commit('pushFilter', value)
  }
}

/**
 * Mutations
 */
const mutations = {
  /**
   * Push Filters
   * 
   * @param {Object} state
   * @param {String} value
   */
  pushFilter(state, value) {
    state.value = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
