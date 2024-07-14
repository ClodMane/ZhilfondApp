import axios from '@/plugins/axios';

const usersStore = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchUsers(context) {
      console.log(context);
      const response = await axios.get('/users');
      console.log(response);
    },
  },
};

export default usersStore;
