import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{
		path: '/courses',
		name: 'Courses',
		component: () => import('@/views/Courses/Courses.vue'),
		children: [
			{
				path: ':slug',
				name: 'CartCourses',
				component: () => import('@/views/Courses/CartCourses.vue'),
				props: (route) => ({ slug: route.params.slug }),
			},
		],
	},
	{ path: '/about', name: 'About', component: () => import('@/views/About.vue') },
	{ path: '/profile', name: 'Profile', component: () => import('@/views/Profile.vue') },
	{
		path: '/courses/:slug',
		name: 'DetailCourse',
		component: () => import('@/views/Courses/CourseDetail.vue'),
		props: (route) => ({ id: parseInt(route.params.id) }),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'courses-active-route',
})

export default router
