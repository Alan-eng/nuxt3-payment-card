<template>
	<div class="payment-card-container">
		<i class="icon">&euro; </i>
		<BaseInput
			v-model:modelValue="payingAmount"
			className="border-solid border-2 border-black pl-4 mb-2"
		/>
		<PaymentForm />
		<PaymentAgreenement />
		<PaymentSummary @submitForm="openModal" />
	</div>
</template>

<script setup>

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
.payment-card-container {
	width: 100%;
	max-width: 750px;
}
</style>
