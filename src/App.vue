<template>
  <div id="app">
    <HeaderBase></HeaderBase>
    <BaseWrapper></BaseWrapper>
    <BasePreloader v-if="getActivePreloader"></BasePreloader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderBase from '@/components/HeaderBase.vue';
import BaseWrapper from '@/components/BaseWrapper.vue';
import BasePreloader from '@/components/BasePreloader.vue';

export default {
  name: 'App',
  components: {
    HeaderBase,
    BaseWrapper,
    BasePreloader,
  },
  computed: {
    ...mapGetters('preloader', ['getActivePreloader']),
  },
};
</script>

<style lang="scss">
@import './assets/main.scss';

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
}
</style>
