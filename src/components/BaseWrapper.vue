<template>
  <div class="main-wrapper">
    <SideBar></SideBar>
    <BaseCard></BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'App',
  components: {
    BaseCard,
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
@import '.././assets/main.scss';

.main-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 576px;
  background: #FDFDFD;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;

}
</style>
