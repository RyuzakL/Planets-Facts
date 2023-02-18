<script setup>
import planetsJSON from '@/db.json'
import Container from '@/components/Container.vue'
import { colors } from '@/helper/colors.js'
import rightArrowSVG from '@/assets/icon-chevron.svg'
const planetsArr = Object.values(planetsJSON)
console.log()

</script>

<template>
	<Container>
		<div v-for="planet, index in planetsArr" :key="index">
			<div class="flex justify-between items-center">
				<div class="flex items-center gap-8">
					<div :class="colors[planet.color]" class="w-5 h-5 rounded-full"></div>
					<span class="text-white font-spartan font-semibold text-[18px] tracking-widest">
						{{ planet.name.toUpperCase() }}</span>
				</div>
				<img class="my-8" :src="rightArrowSVG" alt="">
			</div>
			<hr v-if="index !== planetsArr.length - 1">
		</div>
	</Container>
</template>