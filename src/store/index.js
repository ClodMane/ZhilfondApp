import Vue from 'vue';
import Vuex from 'vuex';
import usersStore from './modules/users';
import preloader from './modules/preloader';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users: { ...usersStore, namespaced: true },
    preloader: { ...preloader, namespaced: true },
  },
});
