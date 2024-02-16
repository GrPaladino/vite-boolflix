<script>
import { store } from "../store";
import AppModal from "./AppModal.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppModal,
  },

  props: {
    movie: Object,
  },
};
</script>

<template>
  <app-modal v-if="store.modal.show" id="modal" />

  <img :src="store.imageUrl + movie.image" alt="" class="relative" />
</template>

<style lang="scss" scoped>
#modal {
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
