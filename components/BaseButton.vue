<template>
	<button @click="$emit('submitForm')" class="submit py-2 px-20">
		<slot />
	</button>
</template>

<script setup>
const props = defineProps({
	className: String,
	type: String,
	style: String,
	modelValue: [String, Number],
})
</script>

<style scoped>
.icon {
	position: absolute;
}

input[type="number"] {
	color: #000;
	appearance: textfield;
	-webkit-appearance: none;
	-moz-appearance: textfield;
}
</style>
