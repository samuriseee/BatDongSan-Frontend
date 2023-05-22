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
  getters: {
    isAuthenticated(state) {
      return !!state.currentUser;
    },
  },
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
      const API = `${process.env.VUE_APP_API}/auth/currentUser`;
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
      const API = `${process.env.VUE_APP_API}/real_estate/getAllRentTypes`;
      try {
        const response = await axios.get(API);
        commit("setAllRentTypes", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBuyTypes({ commit }) {
      const API = `${process.env.VUE_APP_API}/real_estate/getAllBuyTypes`;
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
