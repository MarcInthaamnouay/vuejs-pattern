import kpopbeauty from '../../assets/img.json'

/**
 * Fetch Mixins mixin
 */
export const fetchMixin = {
  methods: {
    /**
     * Get
     *    Fetch data from the server
     * 
     * @return {Promise}
     */
    get() {
      return new Promise((resolve) => {
        setTimeout(() => {
          return resolve(kpopbeauty)
        }, 2000);
      })
    }
  }
}