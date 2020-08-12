<template>
	<div class="courses-header">
		<div class="container">
			<h1>Courses</h1>
			<div class="row container-courses justify-content-md-center">
				<div class="col"></div>
				<div class="col-5" style="text-align: center;">
					<a class="item-menu" href="#">All</a>
					<a class="item-menu" href="#" style="color: #41b883;"
						>Recently</a
					>
					<a class="item-menu" href="#">My courses</a>
					<a class="item-menu" href="#">Favs</a>
				</div>
				<div class="col" style="text-align: end;">
					<a href="#"
						><img
							src="../../assets/img/icon_courses2.svg"
							width="46px"
							style="margin: 0 0 0 10px;"
					/></a>
					<a href="#"
						><img
							src="../../assets/img/icon_courses1.svg"
							width="46px"
							style="margin: 0 10px 0 0;"
					/></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HeadCourses',
		data() {
			return {};
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import "@/assets/styles/style.scss";

	.courses-header {
		background: $white-color;
		height: 200px;
		width: 100%;
		box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.06);
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-wrap: wrap;
		margin-top: 60px;
	}
	.container-courses {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 1em;
		flex-wrap: wrap;
	}
	h1 {
		padding-bottom: 1em;
		text-align: initial;
		color: $font-dark-color;
	}
</style>
