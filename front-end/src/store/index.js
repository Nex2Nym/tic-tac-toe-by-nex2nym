import Vue from 'vue'
import Vuex from 'vuex'
import { settings } from './modules/Settings'
import { gameBoard } from './modules/GameBoard'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    settings,
    gameBoard
  }
})
