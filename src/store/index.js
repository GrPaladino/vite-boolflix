import { reactive } from "vue";

export const store = reactive({
  movies: [],
  tvShows: [],

  moviesApi:
    "https://api.themoviedb.org/3/search/movie?api_key=3cd49753d971acc438f6ec34b4197201&query=",

  tvShowApi:
    "https://api.themoviedb.org/3/search/tv?api_key=3cd49753d971acc438f6ec34b4197201&query=",

  imageUrl: "https://image.tmdb.org/t/p/w500",
});
