<template>
  <div class="main-wrapper">
    <BaseCard></BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  name: 'App',
  components: {
    BaseCard,
  },
};
</script>

<style lang="scss" scoped>
@import '.././assets/main.scss';

.main-wrapper {
  width: 100%;
  height: 576px;
  background: gray;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;

}
</style>
