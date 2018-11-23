<template>
  <div>
    <input
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Searchbar',
  props: ['value'],
}
</script>