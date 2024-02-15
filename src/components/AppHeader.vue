<script>
import { store } from "../store";

// * Axios
import axios from "axios";

export default {
  data() {
    return {
      store,
      movieSearched: "",
    };
  },
  methods: {
    fetchMovies() {
      axios.get(`${store.moviesApi} ${this.movieSearched}`).then((res) => {
        store.movies = res.data.results.map((movie) => {
          return {
            title: movie.title,
            original_title: movie.original_title,
            language: movie.original_language,
            vote: Math.ceil(movie.vote_average / 2),
            image: movie.poster_path,
          };
        });
      });
    },

    fetchTvShow() {
      axios.get(`${store.tvShowApi} ${this.movieSearched}`).then((res) => {
        store.tvShows = res.data.results.map((serie) => {
          return {
            title: serie.name,
            original_title: serie.original_name,
            language: serie.original_language,
            vote: Math.ceil(serie.vote_average / 2),
            image: serie.poster_path,
          };
        });
      });
    },

    performSearch() {
      this.fetchMovies();
      this.fetchTvShow();
    },
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
        @keyup.enter="performSearch()"
      />
    </div>
  </div>
</template>

<style lang="scss">
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
