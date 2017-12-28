import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    imageNames: [
      {name: 'bird', sound: 'src/assets/Animals/Bird.mp3'},
      {name: 'cat', sound: 'src/assets/Animals/cat.mp3'},
      {name: 'cow', sound: 'src/assets/Animals/cow.mp3'},
      {name: 'dog', sound: 'src/assets/Animals/dog.mp3'},
      {name: 'fish', sound: 'src/assets/Animals/fish.mp3'},
      {name: 'frog', sound: 'src/assets/Animals/frog.mp3'},
      {name: 'horse', sound: 'src/assets/Animals/horse.mp3'},
      {name: 'lion', sound: 'src/assets/Animals/lion.mp3'},
      {name: 'lizard', sound: 'src/assets/Animals/lizard.mp3'},
      {name: 'mouse', sound: 'src/assets/Animals/mouse.mp3'},
      {name: 'rabbit', sound: 'src/assets/Animals/rabbit.mp3'},
      {name: 'snake', sound: 'src/assets/Animals/snake.mp3'},
      {name: 'turtle', sound: 'src/assets/Animals/turtle.mp3'},
    ],
    show: false,
    loading: false,
    picked: [],
    randomNames: []
  },
  getters: {
    show: (state) => {
      return state.show
    },
    loading: (state) => {
      return state.loading
    },
    randomNames: (state) => {
      return state.randomNames
    },
    picked: (state) => {
      return state.picked
    }
  },
  mutations: {
    setShow: (getters, payload) => {
      getters.show = payload
    },
    setLoading: (state, payload) => {
      state.loading = payload
    },
    SetPicked: (getters, payload) => {
      getters.picked = payload
    },
    SetRandomNames: (getters, payload) => {
      getters.randomNames = payload
    }
  },
  actions: {
    startQuiz: (context) => {
      context.commit('setLoading', true)
      setTimeout(() => {
        context.commit('setLoading', false)
        context.commit('setShow', true)
      }, 1000)
    },
    GoToNext: (context, state) => {
      let randomValue = _.uniq(_.sampleSize(context.state.imageNames, 4))
      context.commit('SetRandomNames', randomValue)
    }
  }
})
