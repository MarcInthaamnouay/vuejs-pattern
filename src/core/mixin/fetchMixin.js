/**
 * Fetch Mixins mixin
 */
export const fetchMixin = {
  methods: {
    /**
     * Array Buffer To Base 64
     *
     * @param {Buffer} buffer
     * @return {String} base64
     */
    arrayBufferToBase64(buffer) {
      let binary = "";
      const bytes = [].slice.call(new Uint8Array(buffer));

      bytes.forEach(b => (binary += String.fromCharCode(b)));

      return window.btoa(binary);
    },
    /**
     * Get
     *    Fetch data from the server
     *
     * @return {Promise}
     */
    get() {
      return fetch(
        "http://p1.music.126.net/cM7pD2sZd3BnfDQaB2mzrg==/109951163082272972.jpg"
      )
        .then(res => res.arrayBuffer())
        .then(buff => {
          const imageStr = this.arrayBufferToBase64(buff);

          return Promise.resolve(imageStr);
        })
        .catch(err => Promise.reject(err));
    }
  }
};
