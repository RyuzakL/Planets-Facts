import { createStore } from 'vuex';

export default createStore({
  state: {
    isMenuOpen: false,
  },
  mutations: {
    SET_IS_MENU_OPEN(state, event) {
      state.isMenuOpen = event;
    },
  },
  actions: {
    updateIsMenuOpen({ commit }, event) {
      commit('SET_IS_MENU_OPEN', !event);
    },
  },
});
