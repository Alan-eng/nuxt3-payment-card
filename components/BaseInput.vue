<template>
	<label v-if="$slots.label">
		<span class="inline-block pb-2 text-white">
			<slot name="label" />
		</span>
		<input
			:type="type"
			:class="className"
			:style="style"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</label>
	<input
		v-else
		:type="type"
		:class="className"
		:style="style"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
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
