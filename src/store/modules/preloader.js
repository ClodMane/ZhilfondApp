const preloader = {
  getters: {
    getActivePreloader: state => {
      return state.activePreloader;
    },
  },
  state: {
    activePreloader: false,
  },
  mutations: {
    SET_ACTIVE_PRELOADER(state, payload) {
      state.activePreloader = payload;
    },
  },
  actions: {
    setActivePreloader({ commit }, payload) {
      console.log(payload);
      commit('SET_ACTIVE_PRELOADER', payload);
    },
  },
};

export default preloader;
