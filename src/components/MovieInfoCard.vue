<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    movie: Object,
  },

  methods: {
    getFlagIcon(language) {
      if (language == "en")
        return new URL("../assets/flag-icons/gb.svg", import.meta.url).href;
      if (language == "it")
        return new URL("../assets/flag-icons/it.svg", import.meta.url).href;
      if (language == "es")
        return new URL("../assets/flag-icons/es.svg", import.meta.url).href;
      if (language == "fr")
        return new URL("../assets/flag-icons/fr.svg", import.meta.url).href;
      if (language == "de")
        return new URL("../assets/flag-icons/de.svg", import.meta.url).href;
      return new URL("../assets/flag-icons/xx.svg", import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="container">
    <ul>
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
        Voto: {{ movie.vote }}

        <font-awesome-icon
          v-for="index in movie.vote"
          icon="fa-solid fa-star fs-1"
          class="star-checked"
        />
        <font-awesome-icon
          v-for="index in 5 - movie.vote"
          icon="fa-solid fa-star fs-1"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 20px;
  height: 20px;
}
</style>
