<template>
	<div id="courses">
		<HeadCourses />
		<BodyCourses />
	</div>
</template>

<script>
	import HeadCourses from '@/components/Courses/HeadCourses';
	import BodyCourses from '@/components/Courses/BodyCourses';
	export default {
		name: 'Courses',
		components: {
			HeadCourses,
			BodyCourses,
		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss">
	@import "@/assets/styles/style.scss";
	#courses{
		width: 100%;
		height: 100%;
		background: $white-color-248;
		background: $gradient-route-grayEnd;
	}

</style>
