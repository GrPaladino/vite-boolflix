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
  <div>
    <ul @mouseleave="store.closeModal()">
      <li>Titolo: {{ store.modal.title }}</li>
      <li>
        Titolo originale:
        {{ store.modal.originalTitle }}
      </li>
      <li>
        Lingua:
        <img :src="getFlagIcon(store.modal.language)" />
      </li>
      <li>
        Voto:
        <font-awesome-icon
          v-for="index in store.modal.vote"
          icon="fa-solid fa-star fs-1"
          class="star-checked"
        />
        <font-awesome-icon
          v-for="index in 5 - store.modal.vote"
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
