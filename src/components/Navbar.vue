<script setup>
import Container from '@/components/Container.vue';
import NavItem from '@/components/NavItem.vue'
import { ref } from 'vue';

const props = defineProps({
	planet: {
		required: true,
		type: Object
	}
})

const emit = defineEmits(['set-current-tab'])
const currentTab = ref('overview')

const colors = {
	white: 'bg-[#FFFFFF]',
	blueBG: 'bg-[#070724]',
	greyDark: 'bg-[#38384F]',
	greyLight: 'bg-[#838391]',
	cyan: 'bg-[#419EBB]',
	yellow: 'bg-[#EDA249]',
	purple: 'bg-[#6f2ed6]',
	orange: 'bg-[#D14C32]',
	red: 'bg-[#D83A34]',
	brown: 'bg-[#CD5120]',
	green: 'bg-[#1ec2a4]',
	blue: 'bg-[#2d68f0]',
}

const currentPosition = {
	overview: 'left-[0]',
	structure: 'left-[39%]',
	surface: 'left-[76%]'
}

function handleCurrentTab(e) {
	if (e.target.textContent === 'OVERVIEWSTRUCTURESURFACE') return
	currentTab.value = e.target.textContent.toLowerCase()
	emit('set-current-tab', currentTab.value)
}

const isCurrentTab = (tabName) => currentTab.value === tabName
</script>

<template>
	<Container class="relative">
		<nav @click="handleCurrentTab" class="flex justify-between mb-2.5 w-[96%] mx-auto">
			<NavItem :class="{ 'text-white': isCurrentTab('overview') }">OVERVIEW</NavItem>
			<NavItem :class="{ 'text-white': isCurrentTab('structure') }">STRUCTURE</NavItem>
			<NavItem :class="{ 'text-white': isCurrentTab('surface') }">SURFACE</NavItem>
		</nav>
		<div :class="[colors[props.planet.color], currentPosition[currentTab]]"
			class="absolute w-20 h-1 top-8 transition-all">
		</div>
	</Container>
</template>

<!--
	left => 
	 overview : 0%
	 structure : 39%
	 surface : 76%
-->