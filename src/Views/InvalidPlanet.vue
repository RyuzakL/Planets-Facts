<script setup>
import Container from '@/components/Container.vue';
import StarsBgSVG from '../components/StarsBgSVG.vue';
import router from '@/router';

const handlePrevRoute = () => router.push({ name: 'planet', params: { planet: 'mercury' } })
</script>

<template>
	<Container class="text-center grid place-items-center h-[450px]">
		<StarsBgSVG class="h-full" />
		<div>
			<h1>Shit !</h1>
			<p class="text-[14px]">The planet you're trying to get doesn't exist</p>
			<button @click="handlePrevRoute" class="bg-cyan px-3 py-1 rounded-sm mt-6">MERCURY</button>
		</div>
	</Container>
</template>