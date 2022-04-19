import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Courses from '@/views/Courses.vue'
import Profile from '@/views/Profile.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/courses', name: 'Courses', component: Courses },
	{ path: '/about', name: 'About', component: About },
	{ path: '/profile', name: 'Profile', component: Profile },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
