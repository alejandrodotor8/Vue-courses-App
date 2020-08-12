import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		props: true,
	},
	{
		path: '/about',
		name: 'about',
		component: () =>
			import(/* webpackChunkName:"about" */ '../views/About.vue'),
		props: true,
	},
	{
		path: '/courses',
		name: 'courses',
		props: true,
		component: () =>
			import(
				/* webpackChunkName:"courses" */ '../views/Courses/Courses.vue'
			),
		children: [
			
		],
	},
	{
		path: '/courses/:slug',
		name: 'detailcourse',
		props: true,
		component: () =>
			import(
				/* webpackChunkName:"detail" */ '../views/Courses/Detailcourse.vue'
			),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
