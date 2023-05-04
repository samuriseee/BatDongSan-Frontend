import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
    async getCurrentUserInfo({ commit }, token) {
      const API = `http://localhost:8000/auth/currentUser`;
      if (!token) return;
      try {
        const response = await axios.get(API, {
          headers: { Authorization: `Bearer ${token}` },
        });
        commit("setCurrentUser", response.data.user);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
