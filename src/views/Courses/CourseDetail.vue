<template>
	<section class="w-9/12 mx-auto flex items-center justify-center mt-20">
		<div class="w-2/4 p-10">
			<div class="flex items-center justify-between my-4">
				<span class="block text-base my-3">{{ course.teacher }}</span>
				<button><img src="/img/svg/Fav-no.svg" class="w-10 mx-3" /></button>
			</div>
			<h1 v-text="course.title" class="text-5xl"></h1>
			<img src="/img/svg/stars.svg" class="mt-2" style="width: 158px;" />
			<p class="text-justify mt-6">{{ course.description }}</p>
			<div class="flex items-center my-8">
				<button
					@click.prevent="addToCart(course.id)"
					class="w-40 text-xl py-1 bg-vue-400 rounded-lg text-white border-2 border-vue-300"
				>
					Add to cart
				</button>
				<div class="flex text-xl mx-6 justify-end my-2">
					<span class="block text-slate-400" style="text-decoration: line-through">
						{{ course.price_original }}
					</span>
					<span class="block font-semibold ml-2">{{ course.price }}</span>
				</div>
			</div>
		</div>
		<div class="w-2/4">
			<img :src="'/img/courses/' + course.bg_image" :alt="course.title" class="w-full rounded" />
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			id: { type: Number, required: true },
		},
		computed: {
			course() {
				return this.$store.state.listCourses.find((course) => course.id === this.id)
			},
		},
	}
</script>
