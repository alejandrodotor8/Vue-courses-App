<template>
	<div class="container-all-courses">
		<div class="container">
			<div class="row justify-content-center">
				<Course
					v-for="item in $store.getters.coursesFiltered"
					:course="item"
					:key="item.id"
				/>
			</div>
			
		</div>
	</div>
</template>
<script>
	import Course from '../Courses/Course';
	export default {
		name: 'BodyCourses',
		components: {
			Course,
		},
		data() {
			return {};
		},
	};
</script>
<style lang="scss">
	@import "@/assets/styles/style.scss";
	.container-all-courses {
		margin-top: 3em;
		padding: 0 1.5em;
	}
</style>
