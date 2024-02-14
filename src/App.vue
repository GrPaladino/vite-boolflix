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

    fetchTvShow() {
      axios.get(`${store.tvShowApi} ${store.movieSearched}`).then((res) => {
        this.movies = res.data.results[0];
        // ##### NON FUNZIONANTE
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
      <li>Titolo: {{ movies.title || movies.title }}</li>
      <li>
        Titolo originale: {{ movies.original_title || movies.original_name }}
      </li>
      <li>
        Lingua:
        <img
          v-if="movies.original_language == 'en'"
          src="./assets/flag-icons/gb.svg"
        />
        <img
          v-if="movies.original_language == 'it'"
          src="./assets/flag-icons/it.svg"
        />
        <img
          v-if="movies.original_language == 'es'"
          src="./assets/flag-icons/es.svg"
        />
        <img
          v-if="movies.original_language == 'fr'"
          src="./assets/flag-icons/fr.svg"
        />
        <img
          v-if="movies.original_language == 'de'"
          src="./assets/flag-icons/de.svg"
        />
        <img v-else src="./assets/flag-icons/xx.svg" />
      </li>
      <li>Voto: {{ movies.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./style/general.scss";

img {
  width: 20px;
  height: 20px;
}
</style>
