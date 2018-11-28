<template>
  <div class="card" :id="data.love ? 'love' : ''">
    <avatar
      :avatar="data.thumbnail"
      :title="data.title"
      :location="data.location"
    />
    <div class="content">
      <img :src="data.img" />
      <p>{{data.post}}</p>
    </div>
    <div class="action">
      <button 
        type="button"
        @click="love(data.id)"
      >
        Love
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 95%;
  height: 100%;
  padding: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
  border: 1px solid white;

  .action {
    button {
      width: 90%;
      height: 30px; 
      border-radius: 10px;
      box-shadow: 0px;
      background-color: #E82C87;
      color: white;
      border-color: transparent;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    }
  }

  .content {
    img {
      width: 100%;
      border-radius: 10px;
      margin-top: 20px;
    }

    p {
      text-align: justify;
    }
  }
}

#love {
  border-color: #E82C87;
}
</style>

<script>
import { mapActions } from 'vuex'
import Avatar from '../../components/Avatar/Avatar.vue'

export default {
  name: 'MainCard',
  components: {
    Avatar,
  },
  methods: {
    ...mapActions({
      love: 'photos/lovePhoto',
    })
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  }
}
</script>