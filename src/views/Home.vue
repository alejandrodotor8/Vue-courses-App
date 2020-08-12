<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/img/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue';

	export default {
		name: 'Home',
		components: {
			HelloWorld,
		},
	};
</script>

<style lang="scss">
	@import "@/assets/styles/style.scss";

	.home {
		background: $white-color-248;
		background: $gradient-route-whiteStart-grayEnd;
		margin-top: 5em;
		padding: 0 1.5em;
		text-align: center;
	}
</style>
