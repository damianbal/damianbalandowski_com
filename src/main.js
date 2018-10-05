import Vue from 'vue'
import App from './App.vue'
import router from './router'

import SectionComponent from './components/SectionComponent'
import ProjectComponent from './components/ProjectComponent'
import ProjectsComponent from './components/ProjectsComponent'

// style
import './assets/styles/style.scss'

Vue.config.productionTip = false

// components
Vue.component('template-section', SectionComponent)
Vue.component('project', ProjectComponent)
Vue.component('projects', ProjectsComponent)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
