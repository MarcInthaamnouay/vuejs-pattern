<template>
  <div>
    <button
      type="submit"
      class="submit-button"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>
