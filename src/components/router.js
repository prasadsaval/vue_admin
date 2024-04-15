import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Users from './views/Users.vue'
import Settings from './views/Settings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
