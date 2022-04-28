<template>
	<header class="w-7/12 mx-auto my-8 py-2 flex justify-between">
		<div class="flex items-center">
			<router-link to="/">
				<img src="/img/logo.png" class="w-10 mx-3" />
			</router-link>
			<nav class="ml-14 text-slate-700">
				<router-link to="/" class="mx-2">Home</router-link>
				<router-link to="/courses" class="mx-2">Courses</router-link>
				<router-link to="/about" class="mx-2">About</router-link>
			</nav>
		</div>
		<div class="flex items-center">
			<input
				v-model="word"
				@keyup="filterCourse"
				type="text"
				placeholder="Search..."
				class="mx-6 appearance-none border rounded w-56 h-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-emerald-500"
			/>
			<img src="/img/svg/shoppingcart.svg" class="w-8 mx-3" />
			<router-link to="/profile" class="mx-3"><img src="/img/profile.png" style="width:44px;"/></router-link>
		</div>
	</header>
</template>

<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'

	const word = ref('')
	const store = useStore()

	function filterCourse() {
		store.commit('filterCourses', word.value)
	}
</script>
