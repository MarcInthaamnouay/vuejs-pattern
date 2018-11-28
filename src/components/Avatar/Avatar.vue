<template>
  <div class="wrapper">
    <div class="avatar">
      <img :src="avatar" />
    </div>
    <div>
      <p><b>{{title}}</b></p>
      <p><b>{{location}}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatar: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    location: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  display: flex;

  .avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 100%;

    img {
      width: 200px;
    }
  }

  p {
    padding-left: 10px;
    text-align: left;
  }
}
</style>
