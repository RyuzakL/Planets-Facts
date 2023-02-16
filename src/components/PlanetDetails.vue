<script setup>
const props = defineProps({
	label: {
		default: 'label',
		type: String
	},
	details: {
		default: 'details',
		type: String
	}
})

</script>

<template>
	<div class="container flex justify-between items-center border-[1px] border-greyDark px-6 py-3 mb-2 last:mb-12 ">
		<div class="text-greyLight text-[11px] font-spartan font-bold tracking-wide">
			{{ props.label.toUpperCase() }}
		</div>
		<div class="text-white font-antonio text-[20px] tracking-tighter">
			{{ props.details.toUpperCase() }}
		</div>
	</div>
</template>