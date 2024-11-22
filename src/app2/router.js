import { createRouter, createWebHashHistory } from 'vue-router'
import Profile from './views/Profile.vue'
import Education from './views/Education.vue'
import Experience from './views/Experience.vue'

const router = createRouter({
  history: createWebHashHistory('/person/'),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    }
  ]
})

export default router