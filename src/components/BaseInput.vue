<template>
  <div class="input-container">
    <input type="text" class="input" placeholder="Введите Id или имя" />
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  position: relative;
  width: 100%;
}

.input {
  width: 100%;
//   height: 46px;
  padding: 16px 15px;
  border-radius: 8px;
  border: 1.5px solid #E9ECEF;
  background: #fff;
  color: #76787D;
//   transition: $default-transition;

  &::placeholder {
    color: #76787D;
  }

//   &:focus,
//   &:hover {
//     border: 1px solid $primary-color;
//     background: #fff;
//     box-shadow: 0px 2px 4px 0px rgba(250, 144, 9, 0.3);
//   }

//   &:focus-visible {
//     border: 1px solid #fa9009;
//     background: #fff;
//     box-shadow: 0px 2px 4px 0px rgba(250, 144, 9, 0.3);
//   }

}
</style>
