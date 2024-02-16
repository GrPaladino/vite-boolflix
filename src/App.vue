<script>
// Global state store
import { store } from "./store";

// * Import components
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppError from "./components/AppError.vue";
import AppLoading from "./components/AppLoading.vue";

// * Axios
import axios from "axios";

export default {
  data() {
    return {
      store,
      loading: false,
      error: false,
    };
  },

  methods: {
    fetchMovies(movieSearched) {
      axios
        .get(`${store.moviesApi} ${movieSearched}`)
        .then((res) => {
          store.movies = res.data.results.map((movie) => {
            this.loading = true;

            return {
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: Math.ceil(movie.vote_average / 2),
              image: movie.poster_path,
              id: movie.id,
              description: movie.overview,
            };
          });
          if (store.movies == "") this.error = true;
        })
        .catch((error) => {
          if (error) this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    fetchTvShow(movieSearched) {
      axios
        .get(`${store.tvShowApi} ${movieSearched}`)
        .then((res) => {
          store.tvShows = res.data.results.map((serie) => {
            this.loading = true;

            return {
              title: serie.name,
              original_title: serie.original_name,
              language: serie.original_language,
              vote: Math.ceil(serie.vote_average / 2),
              image: serie.poster_path,
              id: serie.id,
              description: serie.overview,
            };
          });
          if (store.tvShows == "") this.error = true;
        })
        .catch((error) => {
          if (error) this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    performSearch(movieSearched) {
      this.fetchMovies(movieSearched);
      this.fetchTvShow(movieSearched);
    },
  },

  components: {
    AppHeader,
    AppMain,
    AppError,
    AppLoading,
  },
};
</script>

<template>
  <div class="wrapper">
    <app-header @search="performSearch" />
    <app-main />
    <app-error v-if="error" />
    <app-loading v-if="loading" />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
.wrapper {
  background-color: #434343;
  height: 100vh;
  overflow: scroll;
}
</style>
