<script>
// Global state store
import { store } from "./store";

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
            vote: movie.vote_average,
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
            vote: serie.vote_average,
          };
        });
      });
    },

    performSearch() {
      this.fetchMovies();
      this.fetchTvShow();
    },

    getFlagIcon(language) {
      if (language == "en")
        return new URL("./assets/flag-icons/gb.svg", import.meta.url).href;
      if (language == "it")
        return new URL("./assets/flag-icons/it.svg", import.meta.url).href;
      if (language == "es")
        return new URL("./assets/flag-icons/es.svg", import.meta.url).href;
      if (language == "fr")
        return new URL("./assets/flag-icons/fr.svg", import.meta.url).href;
      if (language == "de")
        return new URL("./assets/flag-icons/de.svg", import.meta.url).href;
      return new URL("./assets/flag-icons/xx.svg", import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="container mt-3">
    <input v-model="movieSearched" type="text" />
    <button @click="performSearch()" class="btn btn-primary mx-2">
      Search...
    </button>

    <ul v-for="movie in store.movies">
      <li>Titolo: {{ movie.title }}</li>
      <li>
        Titolo originale:
        {{ movie.original_title }}
      </li>
      <li>
        Lingua:
        <img v-if="movie.language == 'en'" src="./assets/flag-icons/gb.svg" />
        <img v-if="movie.language == 'it'" src="./assets/flag-icons/it.svg" />
        <img v-if="movie.language == 'es'" src="./assets/flag-icons/es.svg" />
        <img v-if="movie.language == 'fr'" src="./assets/flag-icons/fr.svg" />
        <img v-if="movie.language == 'de'" src="./assets/flag-icons/de.svg" />
        <img v-else src="./assets/flag-icons/xx.svg" />
      </li>
      <li>Voto: {{ movie.vote }}</li>
    </ul>

    <ul v-for="serie in store.tvShows">
      <li>Titolo: {{ serie.title }}</li>
      <li>
        Titolo originale:
        {{ serie.original_title }}
      </li>
      <li>
        Lingua:
        <img :src="getFlagIcon(serie.language)" />
      </li>
      <li>Voto: {{ serie.vote }}</li>
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
