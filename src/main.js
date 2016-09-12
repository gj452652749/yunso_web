import Vue from 'vue'
import App from './App'
import Overview from './components/app/overview'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/overview': {
    component: Overview
  }
})
router.start(App, '#app')

