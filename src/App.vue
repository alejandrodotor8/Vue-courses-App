<template>
	<div id="app">
		<Header />
		<transition name="slide" mode="out-in">
		<router-view :key="$route.path" />
		</transition>
	</div>
</template>
<script>
	import Header from './components/Header';

	export default {
		name: 'App',
		components: {
			Header,
		},
	};
</script>

<style lang="scss">
	@import "@/assets/styles/style.scss";
	* {
		font-family: Helvetica Neue;
	}
	.slide-enter-active,
	.slide-leave-active{
		transition: opacity .3s, transform .3s;
	}
	.slide-enter,
	.slide-leave-to{
		opacity: 0;
		transform: translateX(-5%);
	}
	#app{
		background: $gradient-route-grayEnd;
	}

</style>
