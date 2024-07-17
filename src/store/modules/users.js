import axios from '@/plugins/axios';

const usersStore = {
  getters: {
    getUserList: state => {
      return state.userList;
    },
  },
  state: {
    userList: null,
  },
  mutations: {
    SET_USERS(state, payload) {
      state.userList = payload;
    },
  },
  actions: {
    async fetchUsers({ commit }, payload) {
      const response = await axios.get(`/users/${payload}`);
      commit('SET_USERS', response);
    },
  },
};

export default usersStore;
