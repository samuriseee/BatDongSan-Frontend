import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  getters: {},
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    signOut(state) {
      state.currentUser = null;
    },
  },
  actions: {
    setCurrentUser({ commit }, user) {
      commit("setCurrentUser", user);
    }
  },
  modules: {},
});
