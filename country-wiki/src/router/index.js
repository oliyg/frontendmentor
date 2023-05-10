import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import { useDbStore } from '@/stores/home'
import { computed } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const dbStore = useDbStore()
  const db = computed(() => dbStore.db)
  if (!db.value.length) {
    await dbStore.queryAllData()
    next()
  } else next()
})

export default router
