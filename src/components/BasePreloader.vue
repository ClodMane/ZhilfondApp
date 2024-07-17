<template>
  <div class="preloader-wrapper">
    <div class="preloader">
      <img src="../assets/images/preloader.svg" alt="'Загрузка...'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePreloader',
};
</script>

<style scoped>
.preloader-wrapper {
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
