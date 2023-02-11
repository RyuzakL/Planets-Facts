<script setup>
import Container from '@/components/Container.vue';
import hamburgerSVG from '@/assets/icon-hamburger.svg'
</script>

<template>
	<header class="mx-auto w-[90%] flex justify-between items-center my-4">
		<h2 class="text-[28px] leading-none tracking-tighter">THE PLANETS</h2>
		<img :src="hamburgerSVG" alt="icon-hamburger">
	</header>
	<hr class="mb-4">
</template>


<!-- https://github.com/RyuzakL/Planets-Facts/blob/master/db.json --> 