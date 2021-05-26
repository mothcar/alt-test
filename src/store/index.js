import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barTitle : '부동산', 
    userData: null,
  },
  mutations: {
    changeTitle (state, newMsg) {
      state.barTitle = newMsg
    },
    saveUserData (state, newMsg) {
      state.userData = newMsg
    },
  }, // mutations 

  actions: {
    changeTitle ({ state, commit }, { newMsg }) {
      commit('changeTitle', newMsg)
    },
    saveUserData ({ state, commit }, { newMsg }) {
      commit('saveUserData', newMsg)
    },
  }, //actions 

  getters: {
    getTitle (state) {
      // return `${state.barTitle} => Length : ${state.barTitle.length}`
      return state.barTitle
    },
    getUserData(state) {
      return state.userData
    },

  },

  modules: {
  }
})
