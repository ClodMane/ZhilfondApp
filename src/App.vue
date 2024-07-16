<template>
  <div id="app">
    <HeaderBase></HeaderBase>
    <BaseWrapper></BaseWrapper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HeaderBase from '@/components/HeaderBase.vue';
import BaseWrapper from '@/components/BaseWrapper.vue';

export default {
  name: 'App',
  components: {
    HeaderBase,
    BaseWrapper,
  },
  computed: {
    ...mapGetters('users', ['getUserList']),
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
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
