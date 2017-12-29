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
    randomNames: [],
    counter: 0,
    singleImageName: ''
  },
  getters: {
    singleImageName: (state) => {
      return state.singleImageName
    },
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
    GoToNext: (context) => {
      let counter = context.state.counter ++

      // getting the image name one by one
      let imageName = _.get(context.state.imageNames, counter)
      let arr1 = _.sampleSize(context.state.imageNames,4)

      // now checking if the image name is in the array or not
      if (_.some(arr1, _.unary(_.partialRight(_.includes, imageName.name)))) {
        console.log('yes')
        context.commit('SetRandomNames', arr1)
      } else {
        // removing an item from this array and replace it with image name and sound
        arr1.splice(_.random(0,3),1, {name: imageName.name, sound: 'src/assets/Animals/'+ imageName.name +'.mp3'})

        // committing the newly created array
        context.commit('SetRandomNames', arr1)
        console.log('no', arr1)
      }

      /*if (imageName) {



        // checking for answer
        if (context.getters.picked !== null && imageName.name === context.getters.picked) {
          console.log('correct')
        } else {
          console.log('wrong')
        }
      }*/
      // passing the single image name to the state
      context.state.singleImageName = imageName.name
      context.commit('SetPicked',null)

    }
  }
})
