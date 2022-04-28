<template>
	<section
		class="w-9/12 mx-auto my-12  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-5 gap-y-16"
	>
		<Cart v-for="course in $store.state.filtered" :key="course.id" :course="course" />
	</section>
</template>

<script>
	import Cart from '@/components/Cart.vue'
	export default {
		props: {
			slug: { type: String, required: true },
		},
		components: { Cart },
		computed: {
			/* courses() {
				return this.$store.state.listCourses.find((course) => course.id === this.id)
			}, */
		},
	}
</script>
