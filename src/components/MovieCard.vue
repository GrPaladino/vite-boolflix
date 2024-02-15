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
};
</script>

<template>
  <img :src="store.imageUrl + movie.image" alt="" />
</template>

<style lang="scss" scoped></style>
