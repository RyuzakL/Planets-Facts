<script setup>
import StarsBgSVG from '@/components/StarsBgSVG.vue'
import iconSourceSVG from '@/assets/icon-source.svg'
import Container from '@/components/Container.vue';
import planetsJSON from '@/db.json'
import PlanetDetails from '@/components/PlanetDetails.vue'
import Navbar from '@/components/Navbar.vue'
import { ref, computed } from 'vue';

const selectedPlanet = ref('mercury')
const currentPlanet = computed(() => planetsJSON[selectedPlanet.value])
const currentTab = ref('overview')
const updateTab = (newTab) => currentTab.value = newTab
console.log(currentPlanet.value)

</script>

<template>
	<StarsBgSVG />
	<Navbar :planet="currentPlanet" @set-current-tab="updateTab" />
	<hr>
	<Container class="grid place-items-center">
		<img class="w-[35%] my-24" :src="`src/${currentPlanet[currentTab].planet}`" alt="">
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

