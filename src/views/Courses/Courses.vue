<template>
	<div class="shadow-xl h-48 flex items-end">
		<div class="w-6/12 mx-auto flex items-end justify-between">
			<h1 class="font-bold text-5xl text-gray-800 pb-14">Courses</h1>
			<div class="m-4" style="text-align: center;">
				<router-link :to="{ name: 'CartCourses', params: { slug: 'all' } }" class="mx-2">All</router-link>
				<router-link :to="{ name: 'CartCourses', params: { slug: 'recently' } }" class="mx-2">Recently</router-link>
				<router-link :to="{ name: 'CartCourses', params: { slug: 'mycourses' } }" class="mx-2">Mycourses</router-link>
				<router-link :to="{ name: 'CartCourses', params: { slug: 'favs' } }" class="mx-2">Favs</router-link>
			</div>
			<div class="flex m-4">
				<a href="#"><img src="/img/svg/icon_courses2.svg" style="width:40px;"/></a>
				<a href="#"><img src="/img/svg/icon_courses1.svg" style="width:40px;"/></a>
			</div>
		</div>
	</div>
	<router-view />
</template>
<script setup>
	import { useRoute, useRouter } from 'vue-router'
	const route = useRoute()
	const router = useRouter()
	if (route.fullPath == '/courses') router.push('/courses/all')
</script>
