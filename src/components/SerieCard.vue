<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    serie: Object,
  },
};
</script>

<template>
  <img :src="store.imageUrl + serie.image" alt="" />
</template>

<style lang="scss" scoped></style>
