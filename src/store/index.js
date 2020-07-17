import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '1111', done: true },
      { id: 2, text: '2222', done: false }
    ],
    count: 0
  },
  mutations: {
    setCount(state){
      state.count++;
    },
    show(){
      console.log('show了一下')
    }
  },
  actions: {
    increment ({commit} ) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit ('show')
          resolve()
        }, 1000)
      })
    }
  },
  getters: {

  },
  modules: {}
});
