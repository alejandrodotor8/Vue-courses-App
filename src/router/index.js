import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const routes = [
	{ path: '/', name: 'Home', component: Home },
	{
		path: '/courses',
		name: 'Courses',
		component: () => import('@/views/Courses/Courses.vue'),
		beforeEnter: (to, from) => {
			console.log(to.params.slug)
			const paths = ['all', 'recently', 'mycourses', 'favs', 'search']
			if (!paths.includes(to.params.slug))
				return {
					name: 'NotFound',
					//allows keeping the URL
					params: { pathMatch: to.path.split('/').slice(1) },
					query: to.query,
					hash: to.hash,
				}
		},
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
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'courses-active-route',
})

export default router
