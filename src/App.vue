<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import TheHeader from './components/TheHeader.vue'
</script>

<template>
	<TheHeader />
	<router-view :key="$route.path"></router-view>
</template>
