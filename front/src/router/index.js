import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Login from '../components/Login.vue'
import Disciplines from '../components/disciplines/Disciplines.vue'
import Instructors from '../components/Instructors.vue'
import News from '../components/News.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/disciplines',
      name: 'disciplines',
      component: Disciplines
    },
    {
      path: '/instructeurs',
      name: 'instructors',
      component: Instructors
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
  ]
})

export default router
