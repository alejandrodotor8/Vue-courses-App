<template>
	<main class="text-vlue-600">
		<section class="flex items-center justify-center px-10 py-20">
			<img src="/img/home/enjoy.png" alt="enjoy learning image" class="w-4/12" />
			<div class="w-5/12 px-10">
				<h1 class="text-6xl font-bold pb-4">Make your <span class="text-vorange-500">learning</span><br />Enjoyable</h1>
				<p class="my-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac elementum tellus aliquet maecenas arcu
					adipiscing nulla vel. Tellus tempus arcu sociis dignissim condimentum sem proin duis vivamus. Egestas amet,
					nec amet ipsum.
				</p>
				<div class="flex items-center">
					<button class="btn bg-vue-400 text-white">Get started</button>
					<button class="btn text-vue-400 ml-4 flex items-center justify-evenly">
						<img src="/img/home/video.svg" alt="play" class="float-left" />
						<span>Watch video</span>
					</button>
				</div>
			</div>
		</section>
		<section class="px-8 text-center">
			<h2 class="text-3xl pb-16">What do you want to learn today?</h2>
			<div class="flex items-center justify-center flex-col animate-bounce">
				<img src="/img/svg/arrow.svg" alt="arrow" class="m-2 w-6" />
				<img src="/img/svg/arrow.svg" alt="arrow" class="m-2 w-6" />
				<span class="text-vue-400 text-xl m-2">SCROLL</span>
			</div>
		</section>
		<section class="flex items-center justify-center flex-col bg-vorange-500 my-20 p-8 relative">
			<img src="/img/manonlaptop.png" alt="man on laptop" class="absolute w-72 right-40 bottom-80" />
			<h2 class="text-4xl text-white font-medium">Our best careers</h2>
			<div class="grid gap-x-20 gap-y-10 grid-cols-3 grid-rows-2 my-8">
				<career v-for="item in careers" :key="item.id" :name="item.name" :info="item.info" :img="item.img" />
			</div>
			<button class="btn bg-vue-400 text-white border-2 border-white">Explore more</button>
		</section>
		<section class="flex items-center justify-center px-8 flex-col m-4">
			<img class="w-3/12" src="/img/home/platform.png" alt="people studing" />
			<h2 class="font-medium text-4xl my-8">The best course platforms</h2>
			<p class="mb-8 w-3/12">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac elementum tellus aliquet maecenas arcu adipiscing
				nulla vel.
			</p>
			<img class="w-8/12 py-8" src="/img/home/Platforms.png" alt="people studing" />
		</section>
		<TheFooter></TheFooter>
	</main>
</template>

<script setup>
	import career from '@/components/Home/Hcareer.vue'
	import TheFooter from '../components/Home/TheFooter.vue'

	const careers = [
		{ id: 1, name: 'Web Development', info: '+100 courses', img: 'web.svg', url: '' },
		{ id: 2, name: 'Software Enineer', info: '+100 courses', img: 'Software.svg', url: '' },
		{ id: 3, name: 'Data Bases', info: '+100 courses', img: 'database.svg', url: '' },
		{ id: 4, name: 'Cooking', info: '+100 courses', img: 'Cookie.svg', url: '' },
		{ id: 5, name: 'Project Management', info: '+100 courses', img: 'Project.svg', url: '' },
		{ id: 6, name: 'Graphic Design', info: '+100 courses', img: 'Graphic.svg', url: '' },
	]
</script>
