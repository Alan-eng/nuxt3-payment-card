<template>
	Получаем данные от сервера
	<PaymentCard
		:payingAmount="payingAmount"
		@updatePaymentCardData="
			(cardData) => {
				formData = cardData
			}
		"
		:mock="mock"
	/>
	<div class="flex items-center mt-8 px-2">
		<input class="mr-2" type="checkbox" name="paying-amount" />
		<label for="paying-amount" class="text-xs f"
			>Привяжите карту для быстрого пополнения баланса по <b>SMS, USSD</b>
			<br />и подключения автоплатежей.
		</label>
	</div>
	<PaymentSubmit @submitForm="openModal" :payingAmount="payingAmount" />
</template>

<script setup>
import { onMounted } from "vue"

// const { data: count } = await useFetch('https://run.mocky.io/v3/811d515c-6153-48c1-90db-d02f27806d85')
async function getData() {
	const data = await $fetch(
		"https://run.mocky.io/v3/811d515c-6153-48c1-90db-d02f27806d85"
	)
	console.log("mock =", data)
	mock.value = data
}

onMounted(() => {
	console.log(`the component is now mounted.`)
	setTimeout(() => {
		getData()
	}, 1000)
})
const payingAmount = ref(159)
const formData = ref({})
let mock = ref({})
</script>

<style>
.payment-form {
	width: 100%;
	max-width: 670px;
}

.icon {
	position: absolute;
}

.payment-form input[type="number"] {
	color: #000;
	appearance: textfield;
	-webkit-appearance: none;
	-moz-appearance: textfield;
}
</style>
