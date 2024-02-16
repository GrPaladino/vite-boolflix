<script>
import { store } from "../store";
import MovieCard from "./MovieCard.vue";
import SerieCard from "./SerieCard.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    MovieCard,
    SerieCard,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-for="(movie, index) in store.movies" class="col-3 my-2">
        <movie-card @click="store.handelModalMovies(index)" :movie="movie" />
      </div>
      <div v-for="serie in store.tvShows" class="col-3 my-2">
        <serie-card :serie="serie" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
