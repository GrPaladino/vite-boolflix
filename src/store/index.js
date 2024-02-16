import { reactive } from "vue";

export const store = reactive({
  movies: [],
  tvShows: [],

  moviesApi:
    "https://api.themoviedb.org/3/search/movie?api_key=3cd49753d971acc438f6ec34b4197201&query=",

  tvShowApi:
    "https://api.themoviedb.org/3/search/tv?api_key=3cd49753d971acc438f6ec34b4197201&query=",

  imageUrl: "https://image.tmdb.org/t/p/w342",

  modal: {
    show: "",
    title: "",
    originalTitle: "",
    language: "",
    vote: "",
  },

  handelModalMovies(movieIndex) {
    const selectedMovie = store.movies[movieIndex];

    if (movieIndex) {
      store.modal.title = selectedMovie.title;
      store.modal.originalTitle = selectedMovie.original_title;
      store.modal.language = selectedMovie.language;
      store.modal.vote = selectedMovie.vote;
      store.modal.image = selectedMovie.image;
      store.modal.show = true;
    }
  },

  closeModal() {
    store.modal.show = false;
  },
});
