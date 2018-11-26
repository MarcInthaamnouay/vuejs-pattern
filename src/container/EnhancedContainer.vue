<script>
export default {
  name: 'EnhancedContainer',
  methods: {
    /**
     * Create Classes
     * 
     */
    createClasses() {
      const rand = Math.floor(Math.random() * Math.floor(2))

      if (!rand) {
        return 'blues'
      }

      return 'solar'
    },
    /**
     * Create Custom Text
     * 
     * @param {String} str
     * @return {String} str
     */
    createCustomText(str) {
      str += 'lolilolilola'

      return str
    }
  },
  /**
   * Render
   */
  render() {
    return this.$scopedSlots.default({
      customClasses: this.createClasses,
      customText: this.createCustomText
    })
  }
}
</script>