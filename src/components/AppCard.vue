<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,

      showInfo: false,
    };
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

    showImage() {
      this.showInfo = false;
    },

    showDetails() {
      this.showInfo = !this.showInfo;
    },
  },

  props: {
    product: Object,
  },
};
</script>

<template>
  <div class="product">
    <img
      :src="store.imageUrl + product.image"
      @mouseenter="showDetails()"
      :alt="product.title"
    />

    <div v-if="showInfo" @mouseleave="showImage()" class="info">
      <ul>
        <li class="mt-3">{{ product.original_title }}</li>

        <li>
          <img :src="getFlagIcon(product.language)" />
        </li>
        <li>
          <font-awesome-icon
            v-for="index in product.vote"
            icon="fa-solid fa-star fs-1"
            class="star-checked"
          />
          <font-awesome-icon
            v-for="index in 5 - product.vote"
            icon="fa-solid fa-star fs-1"
          />
        </li>
        <li>
          <p>Description</p>
          <p class="description">{{ product.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  position: relative;

  .info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    text-align: center;
    overflow: scroll;
    border: 1px solid lightgrey;

    img {
      width: 20px;
      height: 20px;
      margin: 0 auto;
    }

    li {
      margin: 2rem 0;
      font-size: 1.5rem;
    }

    .description {
      font-size: 1rem;
    }
  }
}
</style>
