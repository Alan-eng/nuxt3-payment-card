<template>
	<div
		class="relative right-52 top-4 flex flex-col justify-end items-end p-4 pb-8"
		:style="{
			width: '100%',
			maxWidth: '500px',
			backgroundColor: '#4F4F4F',
		}"
	>
		<div
			class="absolute w-full h-16 left-0 top-16"
			:style="{
				backgroundColor: '#828282',
			}"
		></div>
		<label for="cvv" class="pb-2 text-white">CVC/CVV</label>
		<BaseInput
			:modelValue="cvv"
			:style="{ width: '100%', maxWidth: '110px' }"
			className="p-2"
		/>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia"
const { cvv } = storeToRefs(usePaymentCardStore())
</script>

<style scoped>
.payment-card label,
legend {
	color: white;
}
</style>
