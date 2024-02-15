<script>
// Global state store
import { store } from "./store";

// * Import components
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <app-header />
  <app-main />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
