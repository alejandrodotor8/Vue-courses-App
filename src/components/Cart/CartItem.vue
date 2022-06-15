<template>
	<div class="w-full flex items-center justify-between p-4">
		<img :src="'/img/courses/' + course.bg_image" :alt="course.title" class="w-3/12 rounded" />
		<div class="w-9/12 grid grid-cols-4 grid-rows-3 pl-4">
			<span class="col-start-1 col-end-4 font-bold text-lg text-vlue-600" v-text="course.title"></span>
			<span class="col-start-4 col-end-5 text-lg text-vlue-500 justify-self-end" v-text="'$' + course.price"></span>
			<span class="col-start-1 col-end-3 text-vlue-300 text-sm ">
				<span class="line-through">${{ course.price_original }}</span>
				&nbsp;
				<span class="text-vue-400">${{ course.price }}</span>
			</span>
			<span class="col-start-1 col-end-3 text-vlue-500" v-text="course.teacher"></span>
			<button class="col-start-3 col-end-4 text-vlue-500 flex items-center justify-center">
				<img v-show="isFav" src="/img/svg/cart_fav.svg" alt="fav" />
				<img v-show="!isFav" src="/img/svg/cart_nofav.svg" alt="no fav" />
				<span class="pl-1">Save</span>
			</button>
			<button class="col-start-4 col-end-5 text-vlue-500 flex items-center justify-center">
				<img src="/img/svg/trash.svg" alt="fav" />
				<span class="pl-1">Delete</span>
			</button>
		</div>
	</div>
	<div class="w-11/12 h-0.5 bg-vlue-100"></div>
</template>
<script setup>
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	const store = useStore()

	const props = defineProps({
		course: Object,
	})
	const course = props.course

	const isFav = computed(() => store.state.favCoursesID.includes(course.id))
</script>
