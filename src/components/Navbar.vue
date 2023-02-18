<script setup>
import Container from '@/components/Container.vue';
import NavItem from '@/components/NavItem.vue'
import { colors } from '@/helper/colors.js'
import { ref } from 'vue';

const props = defineProps({
	planet: {
		required: true,
		type: Object
	}
})

const emit = defineEmits(['set-current-tab', 'is-menu-open'])
const currentTab = ref('overview')


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