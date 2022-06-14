<template>
	<header class="w-7/12 mx-auto my-8 py-2 flex justify-between">
		<div class="flex items-center">
			<router-link to="/">
				<img src="/img/logo.png" class="w-10 mx-3" />
			</router-link>
			<nav class="ml-14 text-slate-700">
				<router-link to="/" class="mx-2">Home</router-link>
				<router-link to="/courses/all" class="mx-2">Courses</router-link>
				<router-link to="/about" class="mx-2">About</router-link>
			</nav>
		</div>
		<div class="flex items-center">
			<input
				v-model="word"
				@keyup.enter="filterCourse"
				type="text"
				placeholder="Search..."
				class="mx-6 appearance-none border rounded w-56 h-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-emerald-500"
			/>
			<div class="relative">
				<img src="/img/svg/shoppingcart.svg" alt="cart" class="w-8 mx-3" />
				<span v-show="cartLength > 0" class="text-white text-sm absolute top-1/2 left-1/2 transform_center pb-1 pl-1.5">
					{{ cartLength }}
				</span>
			</div>

			<a to="#" class="mx-3"><img src="/img/profile.png" style="width:44px;"/></a>
		</div>
	</header>
</template>

<script setup>
	import { computed } from 'vue'
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { useStore } from 'vuex'

	const word = ref('')
	const store = useStore()
	const router = useRouter()

	const cartLength = computed(() => store.state.cart.length)
	function filterCourse() {
		router.push('/courses/search')
		store.commit('filterCourses', word.value)
	}
</script>

<style scoped>
	.transform_center {
		transform: translate(-50%, -50%);
	}
</style>
