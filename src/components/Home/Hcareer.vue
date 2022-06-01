<template>
	<div class="bg-white flex items-center justify-between3 p-3 rounded-md">
		<div class="mx-2">
			<p v-text="name" class="font-bold mr-6"></p>
			<span v-text="info" class="font-light text-vlue-300"></span>
		</div>
		<div class="rounded-full border-4 border-vue-400 w-11 h-11 mx-2"></div>
	</div>
</template>

<script setup>
	defineProps({
		name: String,
		info: String,
		img: String,
	})
</script>
