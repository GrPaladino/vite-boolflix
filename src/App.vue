<script>
// Global state store
import { store } from "./store";

// * Axios
import axios from "axios";

export default {
  data() {
    return {
      store,

      movies: [],
    };
  },
  methods: {
    fetchMovies() {
      axios.get(`${store.moviesApi} ${store.movieSearched}`).then((res) => {
        this.movies = res.data.results[0];
      });
    },
  },
};
</script>

<template>
  <div class="container mt-3">
    <input v-model="store.movieSearched" type="text" />
    <button @click="fetchMovies()" class="btn btn-primary mx-2">
      Search...
    </button>

    <ul>
      <li>Titolo: {{ movies.title }}</li>
      <li>Titolo originale: {{ movies.original_title }}</li>
      <li>Lingua: {{ movies.original_language }}</li>
      <li>Voto: {{ movies.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./style/general.scss";
</style>
