<script setup>
import Container from '@/components/Container.vue';
import NavItem from '@/components/NavItem.vue'
import { colors } from '@/helper/colors.js'

const props = defineProps({
	planet: {
		required: true,
		type: Object
	},
	currentTab: {
		required: true,
		type: String
	}
})

const emit = defineEmits(['set-current-tab'])

const currentPosition = {
	overview: 'left-[-2%]',
	structure: 'left-[52%] translate-x-[-52%]',
	surface: 'left-[102%] translate-x-[-102%]'
}

function handleCurrentTab(e) {
	if (e.target.textContent === 'OVERVIEWSTRUCTURESURFACE') return
	emit('set-current-tab', e.target.textContent.toLowerCase())
}
const isCurrentTab = (tabName) => props.currentTab === tabName

</script>

<template>
	<Container class="relative ">
		<nav @click="handleCurrentTab" class="flex justify-between mb-2.5 mx-auto">
			<NavItem :class="{ 'text-white': isCurrentTab('overview') }">OVERVIEW</NavItem>
			<NavItem :class="{ 'text-white': isCurrentTab('structure') }">STRUCTURE</NavItem>
			<NavItem :class="{ 'text-white': isCurrentTab('surface') }">SURFACE</NavItem>
		</nav>
		<div :class="[colors[props.planet.color], currentPosition[props.currentTab]]"
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