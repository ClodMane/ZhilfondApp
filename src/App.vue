<template>
  <div id="app">
    <HeaderBase></HeaderBase>
    <button>fff</button>
    <h1>GGGG</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HeaderBase from '@/components/HeaderBase.vue';

export default {
  name: 'App',
  components: {
    HeaderBase,
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
