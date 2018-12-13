<template>
  <button @click="func">{{ value }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      required: true
    },
    func: {
      type: Function,
      required: true
    }
  }
}
</script>