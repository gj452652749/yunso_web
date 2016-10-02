import Vue from 'vue'
import App from './App'
import Overview from './components/app/overview'
import Datasource from './components/app/datasource'
import Dataimport from './components/app/dataimport'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ScriptLoader from 'script-loader'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ScriptLoader)
const router = new VueRouter()
router.map({
  '/overview': {
    component: Overview
  },
  '/datasource': {
    component: Datasource
  },
  '/dataimport': {
    component: Dataimport
  }
})
router.start(App, '#wrapper')

