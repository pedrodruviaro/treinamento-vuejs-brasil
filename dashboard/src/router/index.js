import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/HomeView.vue')
const Feedbacks = () => import('@/views/FeedbacksView.vue')
const Credentials = () => import('@/views/CredentialsView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feedbacks',
      name: 'feedbacks',
      component: Feedbacks,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/credentials',
      name: 'credentials',
      component: Credentials
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

export default router
