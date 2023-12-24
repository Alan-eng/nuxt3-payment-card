<template>
	<div class="payment-card">
		<i class="icon">&euro; </i>
		<BaseInput
			v-model:modelValue="payingAmount"
			className="border-solid border-2 border-black pl-4"
		/>
		<PaymentForm />
		<div class="flex items-center mt-8 px-2">
			<input class="mr-2" type="checkbox" name="paying-amount" />
			<label for="paying-amount" class="text-xs f"
				>Привяжите карту для быстрого пополнения баланса по <b>SMS, USSD</b>
				<br />и подключения автоплатежей.
			</label>
		</div>
		<PaymentSummary @submitForm="openModal" />
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
const { payingAmount } = storeToRefs(usePaymentCardStore())

const openModal = () => {
	setTimeout(
		() =>
			alert({
				toString: function () {
					return `Успех!, ${JSON.stringify(formData.value)}`
				},
			}),
		500
	)
}
</script>

<style>
.payment-card {
	width: 100%;
	max-width: 670px;
}
</style>
