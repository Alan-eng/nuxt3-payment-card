<template>
	<div class="payment-form">
		<div class="flex items-center my-2">
			<i class="icon">&euro; </i>
			<input
				class="border-solid border-2 border-black pl-4"
				type="number"
				name="paying"
				placeholder="0"
				v-model="payingAmount"
			/>
		</div>
		<PaymentCard :payingAmount="payingAmount" />
		<div class="flex items-center mt-8 px-2">
			<input class="mr-2" type="checkbox" name="paying-amount" />
			<label for="paying-amount" class="text-xs f"
				>Привяжите карту для быстрого пополнения баланса по <b>SMS, USSD</b>
				<br />и подключения автоплатежей.
			</label>
		</div>
		<PaymentSubmit :payingAmount="payingAmount"/>
	</div>
</template>

<script setup>
const payingAmount = ref(159)
</script>

<style>
.payment-form {
	width: 100%;
	max-width: 670px;
}

.icon {
	position: absolute;
}

.payment-form input[type=number] {
	color: #000;
	appearance: textfield;
	-webkit-appearance: none;
	-moz-appearance: textfield;
}
</style>
