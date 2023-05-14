import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    allRentTypes: null,
    allBuyTypes: null,
  },
  getters: {},
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    signOut(state) {
      state.currentUser = null;
    },
    setAllRentTypes(state, allRentTypes) {
      state.allRentTypes = allRentTypes;
    },
    setAllBuyTypes(state, allBuyTypes) {
      state.allBuyTypes = allBuyTypes;
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
    async getAllRentTypes({ commit }) {
      const API = `http://localhost:8000/real_estate/getAllRentTypes`;
      try {
        const response = await axios.get(API);
        commit("setAllRentTypes", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBuyTypes({ commit }) {
      const API = `http://localhost:8000/real_estate/getAllBuyTypes`;
      try {
        const response = await axios.get(API);
        commit("setAllBuyTypes", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
