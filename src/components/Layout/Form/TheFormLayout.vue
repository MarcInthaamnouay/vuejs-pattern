<template>
  <div class="form-layout">
    <h2>Base component example in layout component</h2>
    <dropdown
      :name="dropdown.name"
      :option="dropdown.opt"
      :value="dropdown.value"
      @input="updateSelectedValue"
    ></dropdown>
    <slot />
    <base-submit-button :text="submit"></base-submit-button>
    <base-submit-button :text="del"></base-submit-button>
  </div>
</template>

<script>
import Dropdown from '../../Input/Dropdown.vue'

export default {
  name: 'TheFormLayout',
  components: {
    Dropdown
  },
  data() {
    return {
      submit: 'Submit',
      del: 'Delete',
      dropdown: {
        name: 'Languages',
        opt: [
          {
            id: 0,
            value: 'JavaScript'
          },
          {
            id: 1,
            value: 'PHP'
          },
          {
            id: 2,
            value: 'Rust'
          }
        ],
        value: 2
      }
    }
  },
  methods: {
    updateSelectedValue(s) {
      this.dropdown.value = parseInt(s)
    }
  }
}
</script>

<style lang="scss">
.form-layout {
  background-color: beige;
}
</style>