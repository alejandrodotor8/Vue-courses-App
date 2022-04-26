import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/courses', name: 'Courses', component: () => import('@/views/Courses.vue') },
	{ path: '/about', name: 'About', component: () => import('@/views/About.vue') },
	{ path: '/profile', name: 'Profile', component: () => import('@/views/Profile.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
