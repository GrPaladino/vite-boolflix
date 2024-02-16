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
  <div class="wrapper">
    <app-header />
    <app-main />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
.wrapper {
  background-color: #434343;
  height: 100vh;
  overflow: scroll;
}
</style>
