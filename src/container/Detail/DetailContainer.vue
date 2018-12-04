<template>
  <div class="detail-card">
    <h2>Member of {{ group[0].title }}</h2>
    <div class="flex">
      <avatar
        v-for="member in group[0].members"
        v-bind:key="member.name"
        :avatar="member.img"
        :title="member.name"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Avatar from '../../components/Avatar/Avatar.vue'

export default {
  name: 'DetailContainer',
  computed: {
    ...mapGetters({
      group: 'photos/getGroupByLove'
    })
  },
  components: {
    Avatar
  }
}
</script>