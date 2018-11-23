const state = {
  user: 0
}

/**
 * Getteres
 */
const getters = {
  /**
   * Get User
   * 
   * @param {Object} state 
   */
  getUserId(state) {
    return state.user
  }
}

/**
 * Actions
 */
const actions = {
  /**
   * 
   * @param {Object} commit 
   * @param {Number} userID 
   */
  setUser({ commit }, userID) {
    commit('setUserID', userID)
  }
}

const mutations = {
  /**
   * Set User ID
   * 
   * @param {Object} state
   * @param {Number} userID
   */
  setUserID(state, userID) {
    state.user = userID
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}