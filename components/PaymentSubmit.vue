<template>
	<div class="payment-submit flex items-center justify-between mt-6 px-6 pt-2 pb-6 shadow-lg shadow-black">
		<div class="flex flex-col">
			<div>Итого <br> к зачислению</div>
			<div class="text-xl font-bold">&euro; {{ payingAmount }}</div>
			<div class="text-xs font-light">Без комиссии</div>
		</div>
		<button class="submit py-2 px-20">Оплатить</button>
	</div>
</template>

<script setup>
defineProps({
	payingAmount: Number
})
</script>

<style>
.submit {
	background-color: #000;
	color: white;
}
</style>
