<template>
  <button @click="func">{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    func: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>