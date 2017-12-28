import Vue from 'vue'
import Router from 'vue-router'

// importing components
import Home from '../components/Home'
import Vocabulary from '../components/Vocabulary'

Vue.use(Router)

export default new Router({
  routes : [
    {path: '/', components: {'home-section' : Home}},
    {path: '/vocabulary', components: {'vocabulary-section' : Vocabulary}},
  ]
})
