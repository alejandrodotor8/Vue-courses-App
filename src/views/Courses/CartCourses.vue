<template>
	<section
		v-if="courses.length"
		class="w-9/12 mx-auto my-12  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-5 gap-y-16"
	>
		<Cart v-for="course in courses" :key="course.id" :course="course" />
	</section>
	<div v-else class="text-center text-xl mt-40 opacity-50">
		<p>There is no courses in this section</p>
	</div>
</template>

<script setup>
	import Cart from '@/components/Courses/Cart.vue'
	import { ref, watch } from 'vue'
	import { useStore } from 'vuex'

	const props = defineProps({
		slug: { type: String, required: true },
	})
	const store = useStore()
	let courses = ref(store.getters.courses)
	switch (props.slug) {
		case 'all':
			courses.value = store.getters.courses
			break
		case 'recently':
			courses.value = store.getters.recentCourses
			break
		case 'mycourses':
			courses.value = store.getters.userCourses
			break
		case 'favs':
			courses.value = store.getters.favCourses
			break
		case 'search':
			courses.value = store.getters.filteredCourses
			break
		default:
			courses.value = store.getters.courses
			break
	}
	watch(
		() => store.getters.filteredCourses,
		() => (courses.value = store.getters.filteredCourses)
	)
</script>
