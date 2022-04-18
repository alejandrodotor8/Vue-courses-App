<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + Vite" />
	<div class="p-6 mt-2 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
		<div class="shrink-0">
			<img class="h-12 w-12" src="./assets/logo.png" alt="ChitChat Logo" />
		</div>
		<div>
			<div class="text-xl font-medium text-black">Test Tailwind</div>
			<p class="text-slate-500">You have a new message!</p>
		</div>
	</div>
	<br />
	<div class="m-4">
		<router-link to="/" class="py-2 px-4 mx-2 bg-green-500 text-white text-sm font-semibold rounded-md shadow"
			>Home</router-link
		>
		<router-link to="/about" class="py-2 px-4 mx-2 bg-green-500 text-white text-sm font-semibold rounded-md shadow"
			>About</router-link
		>
	</div>

	<router-view></router-view>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
