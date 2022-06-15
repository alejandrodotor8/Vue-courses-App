<template>
	<router-link :to="{ name: 'DetailCourse', params: { id: course.id, slug: course.slug } }">
		<div class="shadow-xl rounded-lg w-60 h-82 text-gray-700">
			<img :src="'/img/courses/' + course.bg_image" :alt="course.title" class="w-60 rounded-t-lg" />
			<span class="block  text-base font-semibold mt-4 mx-6">{{ course.title }}</span>
			<span class="block text-sm mx-6 mt-2">{{ course.teacher }}</span>
			<img src="/img/svg/stars.svg" class="mx-6" style="width: 58px;" />
			<div class="flex text-sm mx-6 justify-end my-2">
				<span class="block text-slate-400 line-through pr-1"> ${{ course.price_original }} </span>
				<span class="block font-semibold">${{ course.price }}</span>
			</div>
			<div class="flex items-center justify-between mx-6 mt-4">
				<button @click.prevent="changeFav(course.id)">
					<img v-show="isFav" src="/img/svg/Fav.svg" />
					<img v-show="!isFav" src="/img/svg/Fav-no.svg" />
				</button>
				<button
					@click.prevent="addToCart(course.id)"
					class="w-32 py-1 bg-vue-400 rounded-lg text-white border-2 border-vue-300"
				>
					Add to cart
				</button>
			</div>
		</div>
	</router-link>
</template>
<script setup>
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	const props = defineProps({
		course: Object,
	})
	const store = useStore()

	const isFav = computed(() => store.state.favCoursesID.includes(props.course.id))
	//Funciones
	function addToCart(id) {
		store.commit('addCourseToCart', id)
	}
	function changeFav(id) {
		store.commit('changeFavStatus', id)
	}
</script>
