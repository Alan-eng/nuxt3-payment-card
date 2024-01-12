<template>
	<div
		class="payment-submit flex items-center justify-between mt-6 px-6 pt-2 pb-6 shadow-lg shadow-black"
	>
		<div class="flex flex-col">
			<div>
				Итого <br />
				к зачислению
			</div>
			<SummaryValue :payingAmount="payingAmount"/>
			<div class="text-xs font-light">Без комиссии</div>
		</div>
		<BaseButton>Оплатить</BaseButton>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia"
const { payingAmount } = storeToRefs(usePaymentCardStore())
</script>

<style>
.submit {
	background-color: #000;
	color: white;
}
</style>
