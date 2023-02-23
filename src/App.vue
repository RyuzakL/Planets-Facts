<script setup>
import hamburgerSVG from '@/assets/icon-hamburger.svg'
import { computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const isMenuOpen = computed(() => store.state.isMenuOpen)
const handleIsMenuOpen = () => store.dispatch('updateIsMenuOpen', isMenuOpen.value)

</script>

<template>
	<header class="mx-auto w-[88%] flex justify-between items-center my-4">
		<h2 class="text-[28px] leading-none tracking-tighter">THE PLANETS</h2>
		<img @click="handleIsMenuOpen" :src="hamburgerSVG" alt="icon-hamburger">
	</header>
	<hr class="mb-4">
	<RouterView />
</template>

