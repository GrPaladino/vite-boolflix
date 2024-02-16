<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
      movieSearched: "",
    };
  },
};
</script>

<template>
  <div class="header">
    <div class="container">
      <h1>BOOLFLIX</h1>

      <input
        v-model="movieSearched"
        type="text"
        @keyup.enter="$emit('search', this.movieSearched)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.header {
  background-color: #000000;

  .container {
    min-height: 100px;
    @include d-flex-center;

    h1 {
      color: red;
    }
  }
}
</style>
