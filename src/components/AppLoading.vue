<script>
export default {};
</script>

<template>
  <div>
    <font-awesome-icon
      icon="fa-solid fa-circle-notch"
      spin
      size="2xl"
      class="icon"
    />
  </div>
</template>

<style lang="scss" scoped>
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
  .icon {
    font-size: 6rem;
    color: white;
  }
}
</style>
