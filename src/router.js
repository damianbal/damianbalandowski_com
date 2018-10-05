import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Games from './views/Games.vue'
import Projects from './views/Projects.vue'
import Templates from './views/Templates.vue'
import Other from './views/Other.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/templates',
      name: 'templates',
      component: Templates 
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    }
  ]
})
