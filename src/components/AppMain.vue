<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppCard,
  },
};
</script>
<template>
  <div class="container">
    <div class="row g-3">
      <h2 v-if="store.noMovie">No Movie Found</h2>
      <h2 v-else>Movies</h2>

      <app-card
        v-for="movie in store.movies"
        :key="movie.id"
        :product="movie"
        class="col-3"
      />

      <h2 v-if="store.noSerie">No Tv Show Found</h2>
      <h2 v-else>Tv Shows</h2>

      <app-card
        v-for="serie in store.tvShows"
        :key="serie.id"
        :product="serie"
        class="col-3"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin: 2rem auto;
  text-align: center;
  color: white;
}
</style>
