<script setup>
import StarsBgSVG from '@/components/StarsBgSVG.vue'
import Container from '@/components/Container.vue';
import PlanetDetails from '@/components/PlanetDetails.vue'
import Navbar from '@/components/Navbar.vue'
import iconSourceSVG from '@/assets/icon-source.svg'

import { ref, computed, watch } from 'vue';
import planetsJSON from '@/db.json'
import { toNumber } from '@vue/shared';

const props = defineProps({
	planet: {
		type: String,
		required: true
	}
})

const currentPlanet = computed(() => planetsJSON[props.planet])
const currentTab = ref('overview')
const planetWidth = ref((100 + toNumber(currentPlanet.value.radius.replace('KM', '').replace(',', '').slice(0, 2))) / 100)

const updateTab = (newTab) => currentTab.value = newTab
const isSurfaceTab = () => currentTab.value === 'surface'

watch(currentPlanet, () => {
	currentTab.value = 'overview'
	console.log()
})
</script>

<template>
	<StarsBgSVG />
	<Navbar :planet="currentPlanet" @set-current-tab="updateTab" :currentTab="currentTab" />
	<hr>
	<Container class="grid place-items-center relative">
		<div class="w-[100%] grid place-items-center relative my-24 ">

			<img :class="{ 'absolute w-[20%] top-[70px]': isSurfaceTab(), 'w-[35%]': !isSurfaceTab() }" class=" z-10"
				:src="`src/${currentPlanet[currentTab].planet}`" alt="planet image">

			<img v-if="isSurfaceTab()" class="w-[35%] z-0" :src="`src/${currentPlanet.overview.planet}`"
				alt="planet image detail, surface Tab">

		</div>
		<h2 class="tracking-normal mb-4">{{ (currentPlanet.name).toUpperCase() }}</h2>
		<p class="text-center tracking-normal leading-5 mb-8 ">{{ currentPlanet[currentTab].content }}</p>
		<span class="flex items-center gap-2 text-greyLight mb-6">Source : <a class="text-greyLight font-bold underline"
				:href="currentPlanet[currentTab].source">Wikipedia </a> <img :src="iconSourceSVG" alt=""></span>
		<PlanetDetails :label="'rotation time'" :details="currentPlanet.rotation" />
		<PlanetDetails :label="'revolution time'" :details="currentPlanet.revolution" />
		<PlanetDetails :label="'radius'" :details="currentPlanet.radius" />
		<PlanetDetails :label="'average temp.'" :details="currentPlanet.temperature" />
	</Container>
</template>	

