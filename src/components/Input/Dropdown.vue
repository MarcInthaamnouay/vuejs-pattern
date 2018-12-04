<template>
  <div class="select-input">
    <select :name="name"
      v-bind:value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="opt in option"
        :key="opt.id"
        :value="opt.id"
      >
        {{ opt.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    name: {
      required: true,
      type: String
    },
    option: {
      required: true,
      type: Array
    },
    value: {
      required: true,
      type: Number
    }
  }
}
</script>

<style lang="scss">
.select-input {

}
</style>