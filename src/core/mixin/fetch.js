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
      return fetch('https://www.mangaeden.com/api/list/0/?p=10')
        .then(res => res.json())
        .then(res => res.manga)
        .catch(err => Promise.reject(err));  
    }
  }
}