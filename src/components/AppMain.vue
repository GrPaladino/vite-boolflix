<script>
import { store } from "../store";
import MovieCard from "./MovieCard.vue";
import SerieCard from "./SerieCard.vue";
import MovieInfoCard from "./MovieInfoCard.vue";
import SeriesInfoCard from "./SeriesInfoCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    MovieCard,
    SerieCard,
    MovieInfoCard,
    SeriesInfoCard,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-for="movie in store.movies" class="col-3 my-2">
        <movie-card :movie="movie" />
      </div>
      <div v-for="serie in store.tvShows" class="col-3 my-2">
        <serie-card :serie="serie" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
