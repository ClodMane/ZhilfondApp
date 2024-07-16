<template>
  <div class="item-wrapper">
    <div class="image-wrapper">
      <div class="image-block"></div>
    </div>
    <div class="information-block">
      <div class="name">{{ user.name }}</div>
      <div class="email">{{ user.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.item-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    box-shadow: 0px 0px 10px 0px #0000001A;
    border-radius: 10px;
    margin-bottom: 18px;
    cursor: pointer;
    &:hover {
      .information-block {
        background-color: #E0E0E0;
      }
  }
}
.image-wrapper {
    width: 70px;
    height: 100%;
    border-right: 1px solid #DEDEDD;
}
.image-block {
    width: 100%;
    height: 100%;
    background-image: url('.././assets/images/rectangle_small.svg');
}
.information-block {
  width: 75%;
  padding: 15px;
}
.name {
    font-weight: 600;
    font-size: 14px;
    color: #333333;
}
.email {
    font-weight: 400;
    font-size: 14px;
    color: #76787D;
}
</style>
