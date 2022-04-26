<template>
	<h1>{{ course.title }}</h1>
	<p>{{ course.description }}</p>
</template>

<script>
	export default {
		name: 'CourseDetail',
		computed: {
			course() {
				return this.$store.state.listCourses.find((course) => course.slug === this.$route.params.slug)
			},
		},
	}
</script>
