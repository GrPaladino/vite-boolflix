<script>
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container mt-3">
    <input v-model="store.movieSearched" type="text" />
    <button class="btn btn-primary mx-2">Search...</button>
  </div>
</template>

<style lang="scss" scoped>
@use "./style/general.scss";
</style>
