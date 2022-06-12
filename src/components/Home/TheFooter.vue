<template>
	<footer class="bg-vlue-100 mt-12">
		<div class="w-9/12 mx-auto py-8">
			<div class="flex items-center justify-center px-8">
				<div class="w-3/6 flex">
					<img src="/img/home/Vue-grey.png" alt="vue grey logo" />
					<p class="font-bold text-vlue-500 w-80 px-2">
						I built this website to learn Vue 3, Vuex, Vue Router, VIte and Tailwind.
					</p>
				</div>
				<div class="w-3/6 flex justify-center text-vlue-500 text-sm list">
					<ul class="px-4">
						<li>Search</li>
						<li>Articles</li>
						<li>Topics</li>
						<li>Contact</li>
					</ul>
					<ul class="px-4">
						<li>Careers</li>
						<li>Shop</li>
						<li>Support</li>
					</ul>
				</div>
			</div>
			<div class="flex items-center justify-end px-8 text-vlue-300 text-sm pt-5 font-light">
				<a class="px-3" href="https://linktr.ee/alejandrodotor8" target="_blank" rel="noopener noreferrer"
					>@alejandrodotor8</a
				>
				<a class="px-3" href="#" target="_blank" rel="noopener noreferrer">Terms & conditions</a>
				<a class="px-3" href="#" target="_blank" rel="noopener noreferrer">FAQ</a>
				<a href="https://github.com/alejandrodotor8/Vue-courses-App" target="_blank" rel="noopener noreferrer">
					<img src="/img/home/github.svg" alt="github repository" />
				</a>
				<div class="m-3 mode flex items-center justify-start">
					<div class="sun"></div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
	.list li {
		padding-top: 8px;
		padding-bottom: 8px;
	}
	.mode {
		width: 46px;
		height: 26px;
		background-image: url('/img/home/modebg.svg');
		background-size: cover;
	}
	.sun {
		width: 24px;
		height: 24px;
		background-image: url('/img/home/sun.svg');
		background-size: cover;
		margin-left: 2px;
	}
</style>
