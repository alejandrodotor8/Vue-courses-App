<template>
	<div id="app">
		<TheHeader />
		<transition name="slide" mode="out-in">
		<router-view :key="$route.path" />
		</transition>
	</div>
</template>
<script>
	import TheHeader from '@/components/Header/TheHeader';

	export default {
		name: 'App',
		components: {
			TheHeader,
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
