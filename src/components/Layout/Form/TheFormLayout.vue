<template>
  <div class="form-layout">
    <h2>Layout component example</h2>
    <p>It has 2 button and 1 input and the content render through the "slot"</p>
    <dropdown
      :name="dropdown.name"
      :option="dropdown.opt"
      :value="dropdown.value"
      @input="updateSelectedValue"
    ></dropdown>
    <slot />
    <submit-button :text="submit"></submit-button>
    <submit-button :text="del"></submit-button>
  </div>
</template>

<script>
import SubmitButton from '../../Button/SubmitButton.vue'
import Dropdown from '../../Input/Dropdown.vue'

export default {
  name: 'TheFormLayout',
  components: {
    SubmitButton,
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