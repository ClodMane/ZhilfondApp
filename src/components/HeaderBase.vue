<template>
  <div class="main-header">
    <div class="main-header__logo-text">Жилфонд</div>
    <div class="main-header__user-info">Пользователь</div>
  </div>
</template>

<style lang="scss" scoped>
@import '.././assets/main.scss';

.main-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 100%;
  padding: 0 0 25px;

  &__logo-text {
  font-size: 32px;
  font-weight: 700;
  color: $primary-color;
  cursor: pointer;
  }
  &__user-info {
  font-size: 16px;
  font-weight: 400;
  color: $heading-text;
  cursor: pointer;
  }
}
</style>
