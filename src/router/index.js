import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '@/firebase/config'

//GUARD
const requireAuth = async (to, from, next) => {
  let user = await projectAuth.currentUser;
  if (!user) {
    next({name: "Welcome"})
  } else {
    next();
  }
}

const alreadyLoggedIn = async (to, from, next) => {
  let user = await projectAuth.currentUser;
  if (user) {
    next({name: "Chatroom"})
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: alreadyLoggedIn
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
