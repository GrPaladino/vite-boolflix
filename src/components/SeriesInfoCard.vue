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
img {
  width: 20px;
  height: 20px;
}
</style>
