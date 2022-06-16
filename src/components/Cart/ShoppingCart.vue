<template>
	<div
		class="cart absolute hidden items-center justify-between flex-col w-100 py-4 top-12 right-0 bg-vgrey-300 rounded-md shadow-md height overflow-y-auto"
	>
		<div v-show="courses.length > 0">
			<CartItem v-for="course in courses" :key="course.id" :course="course" />
		</div>
		<div v-show="courses.length == 0" class="text-xl text-vlue-300 opacity-50">Empty cart</div>
		<div class="w-full px-4">
			<div class="flex items-center justify-between font-bold text-vlue-600 text-xl my-4 ">
				<span>Total ({{ courses.length }})</span><span>${{ total.toFixed(2) }}</span>
			</div>
			<button class="w-full h-10 border-2 border-vue-400 rounded-md my-2 bg-vue-400 text-lg font-medium text-white">
				Proceed to checkout
			</button>
		</div>
	</div>
</template>

<script setup>
	import { ref, watch } from 'vue'
	import { useStore } from 'vuex'

	import CartItem from './CartItem.vue'

	const store = useStore()
	const cart = store.state.cart

	let courses = ref([])
	let total = ref(0)

	watch(cart, (newCart) => {
		courses.value = []
		newCart.forEach((item) => {
			courses.value.push(store.state.listCourses.find((elem) => elem.id == item))
		})

		total.value = 0
		for (let key in courses.value) {
			total.value += parseFloat(courses.value[key].price)
		}
	})
</script>

<style scoped>
	.height {
		height: 30rem;
	}
</style>
