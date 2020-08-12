<template>
	<div class="about">
		<h5>This is an about page</h5>
	</div>
</template>
<script>
	//import HelloWorld from '@/components/HelloWorld.vue';

	export default {
		name: 'Home',
		components: {
			//HelloWorld,
		},
	};
</script>
<style lang="scss">
	@import "@/assets/styles/style.scss";
	.about {
		width: 100%;
		height: 100%;
		background: $white-color-248;
		background: $gradient-route-whiteStart-grayEnd;
		margin-top: 5em;
		padding: 0 1.5em;
		text-align: center;
	}
</style>
