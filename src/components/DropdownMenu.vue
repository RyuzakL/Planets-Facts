<script setup>
import planetsJSON from '@/db.json'
import { colors } from '@/helper/colors.js'
import rightArrowSVG from '@/assets/icon-chevron.svg'
import { onMounted, onUnmounted } from 'vue';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
const planetsArr = Object.values(planetsJSON)
console.log()

onMounted(() => {
	disableBodyScroll(document.body)
})

onUnmounted(() => {
	enableBodyScroll(document.body)
})

</script>

<template>
	<div class="fixed bg-blueBG z-30 top-20 w-full h-full">
		<div class="w-[88%] mx-auto" v-for="planet, index in planetsArr" :key="index">
			<div class="flex justify-between items-center">
				<div class="flex items-center gap-8">
					<div :class="colors[planet.color]" class="w-5 h-5 rounded-full"></div>
					<span class="text-white font-spartan font-semibold text-[18px] tracking-widest">
						{{ planet.name.toUpperCase() }}</span>
				</div>
				<img class="my-8" :src="rightArrowSVG" alt="arrow right icon">
			</div>
			<hr v-if="index !== planetsArr.length - 1">
		</div>
	</div>
</template>

<!-- 
 - Chercher le meilleur endroit ou mettre le dropdown menu


 -->