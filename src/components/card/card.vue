<template>
  <div class="card">
    <div class="card__header">
      <p>{{data.a}}</p>
    </div>
    <div class="card__content">
      <div class="content__genre">
        <ul>
          <li
            v-for="(genre, idx) in data.c"
            v-bind:key="idx"
          >
            {{ genre }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &__header {
    font-size: 25px;
  }

  &__content {

    .content__genre {
      padding-bottom: 10px;

      ul {
        li {
          text-align: left;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      required: true,
      type: Object
    }
  }
}
</script>