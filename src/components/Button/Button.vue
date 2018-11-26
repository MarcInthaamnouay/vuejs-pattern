<template>
  <button
    :class="classes"
    @click="action"
  >
    {{text}}
  </button>
</template>

<style lang="scss">

button {

  width: 95vw;
  margin: 0 auto;
  margin-left: 10px;
  margin-right: 10px;
  height: 30px;
  margin-top: 30px;

  &.blues {
    background-color: rgb(78, 145, 245);
  }

  &.solar {
    background-color: rgb(245, 206, 78);    
  }
}

</style>

<script>
export default {
  name: 'Button',
  props: {
    action: {
      required: true,
      type: Function
    },
    text: {
      required: true,
      type: String
    },
    classes: {
      required: false,
      type: String
    }
  }
}
</script>