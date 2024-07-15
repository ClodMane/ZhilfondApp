<template>
  <div id="app">
    <button>fff</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {},
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
