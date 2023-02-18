<script setup>
import hamburgerSVG from '@/assets/icon-hamburger.svg'
import { ref } from 'vue';
const isMenuOpen = ref(false)

const handleIsMenuOpen = () => isMenuOpen.value = !isMenuOpen.value
</script>

<template>
	<header class="mx-auto w-[88%] flex justify-between items-center my-4">
		<h2 class="text-[28px] leading-none tracking-tighter">THE PLANETS</h2>
		<img @click="handleIsMenuOpen" :src="hamburgerSVG" alt="icon-hamburger">
	</header>
	<hr class="mb-4">
	<RouterView :isMenuOpen="isMenuOpen" />
</template>


<!-- RyuzakL/Planets-Facts/mercury --> 