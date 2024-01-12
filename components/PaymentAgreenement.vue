<template>
	<div class="flex items-center mt-8 px-2">
		<input class="mr-2" type="checkbox" name="paying-amount" />
		<label for="paying-amount" class="text-xs f"
			>Привяжите карту для быстрого пополнения баланса по <b>SMS, USSD</b>
			<br />и подключения автоплатежей.
		</label>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia"
const { payingAmount } = storeToRefs(usePaymentCardStore())
</script>

<style scoped></style>
