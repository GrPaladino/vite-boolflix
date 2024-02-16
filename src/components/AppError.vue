<script>
export default {};
</script>

<template>
  <div>
    <p>ERROR 404 PAGE NOT FOUND</p>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 3rem;
  }
}
</style>
