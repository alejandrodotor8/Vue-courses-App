<template>
	<main>
		<h3>Cart {{ cart.length }}</h3>
	</main>
</template>
<script setup>
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	const store = useStore()
	const cart = computed(() => store.state.cart)
</script>
