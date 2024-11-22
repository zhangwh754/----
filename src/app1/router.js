import { createRouter, createWebHashHistory } from 'vue-router'
import Counter from './views/Counter.vue'
import About from './views/About.vue'
import Settings from './views/Settings.vue'

const router = createRouter({
  history: createWebHashHistory('/counter/'),
  routes: [
    {
      path: '/',
      name: 'counter',
      component: Counter
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})

export default router