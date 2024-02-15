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

};
</script>

<template>
  <!-- #### TODO FONTAWESOME PROBLEM -->
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
        <img :src="getFlagIcon(movie.language)" />
      </li>
      <li>
        Voto:

        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="movie.vote >= 1 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="movie.vote >= 2 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="movie.vote >= 3 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="movie.vote >= 4 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="movie.vote >= 5 ? 'star-checked' : ''"
        />
      </li>
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
      <li>
        Voto:
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="serie.vote >= 1 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="serie.vote >= 2 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="serie.vote >= 3 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="serie.vote >= 4 ? 'star-checked' : ''"
        />
        <font-awesome-icon
          icon="fa-solid fa-star fs-1"
          value="5"
          :class="serie.vote >= 5 ? 'star-checked' : ''"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./style/general.scss";

img {
  width: 20px;
  height: 20px;
}

.star-checked {
  color: #ffd43b;
}
</style>
