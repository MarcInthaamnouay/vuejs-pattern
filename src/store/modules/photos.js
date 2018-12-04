const state = {
  photos: [],
}

/**
 * Getters
 */
const getters = {
  /**
   * Get Photos
   * 
   * @param {Object} state
   * @param {Number} id
   * @return {Array}
   */
  getPhotos: (state) => {
    return state.photos
  },
  /**
   * Get Group By Love
   * 
   * @param {Object} state
   * @return {Array} loved group
   */
  getGroupByLove: (state) => {
    return state.photos.filter(p => p.love)  
  }
}

/**
 * Actions
 */
const actions = {
  /**
   * Set Photos
   * 
   * @param {Object} commit 
   * @param {Array} albums 
   */
  setPhotos({ commit }, photos) {
    if (photos.length === 0) {
      return
    }
    commit('pushPhotos', photos)
  },
  /**
   * Remove Photo
   * 
   * @param {Object} commit
   * @param {Number} id
   */
  lovePhoto({ commit }, id) {
    if (typeof id !== 'number') {
      return
    }

    commit('lovePhotoInAlbum', id)
  }
}

/**
 * Mutations
 */
const mutations = {
  /**
   * Push Albums
   * 
   * @param {Object} state
   * @param {Array} photos
   */
  pushPhotos(state, photos) {
    const updatedPhotos = [...state.photos, ...photos]
    state.photos = updatedPhotos
  },
  /**
   * Remove Todo
   * 
   * @param {Object} state
   * @param {Number} id
   */
  lovePhotoInAlbum(state, id) {
    const photos = state.photos.slice()
    for (let idx = 0; idx < photos.length; idx++) {
      if (photos[idx].id === id) {
        photos[idx].love = true;
      } else {
        photos[idx].love = false;
      }
    }

    state.photos = photos
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
