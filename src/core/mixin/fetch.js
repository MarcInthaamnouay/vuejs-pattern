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
      return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .catch(err => Promise.reject(err));  
    }
  }
}