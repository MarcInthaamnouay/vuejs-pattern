const state = {
  mangas: [],
}

/**
 * Getters
 */
const getters = {
  /**
   * Mangas By Filter
   * 
   * @param {Object} state
   * @param {Object} rootState
   * @param {Number} id
   * @return {Array}
   */
  mangasByFilter: (state, _, rootState) => {
    const { value } = rootState.filter
    if (value.length === 0) {
      return state.mangas
    }

    return state.mangas.filter(m => m.c.contains(value))
  }
}

/**
 * Actions
 */
const actions = {
  /**
   * Set Mangas
   * 
   * @param {Object} commit 
   * @param {Array} mangas 
   */
  setMangas({ commit }, mangas) {
    if (mangas.length === 0) {
      return
    }

    commit('pushMangas', mangas)
  }
}

/**
 * Mutations
 */
const mutations = {
  /**
   * Push Mangas
   * 
   * @param {Object} state
   * @param {Array} mangas
   */
  pushMangas(state, mangas) {
    const updatedMangas = [...state.mangas, ...mangas]
    state.mangas = updatedMangas
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
