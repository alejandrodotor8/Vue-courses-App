<template>
	<h1>{{ course.title }}</h1>
	<p>{{ course.description }}</p>
</template>

<script>
	export default {
		props: {
			id: { type: Number, required: true },
		},
		computed: {
			course() {
				return this.$store.state.listCourses.find((course) => course.id === this.id)
			},
		},
	}
</script>
