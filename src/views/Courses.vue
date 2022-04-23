<template>
	<div class="shadow-xl h-48 flex items-end">
		<div class="w-6/12 mx-auto flex items-end justify-between">
			<h1 class="font-bold text-5xl text-gray-800 pb-14">Courses</h1>
			<div class="m-4" style="text-align: center;">
				<a class="mx-2" href="#">All</a>
				<a class="mx-2" href="#" style="color: #41b883;">Recently</a>
				<a class="mx-2" href="#">My courses</a>
				<a class="mx-2" href="#">Favs</a>
			</div>
			<div class="flex m-4">
				<a href="#"><img src="/img/svg/icon_courses2.svg" style="width:40px;"/></a>
				<a href="#"><img src="/img/svg/icon_courses1.svg" style="width:40px;"/></a>
			</div>
		</div>
	</div>
	<div
		class="w-9/12 mx-auto my-12  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-5 gap-y-16"
	>
		<Cart v-for="course in $store.state.listCourses" :key="course.id" :course="course" />
	</div>
</template>
<script setup>
	import Cart from '@/components/Cart.vue'
</script>
