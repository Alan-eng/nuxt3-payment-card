<template>
	<div class="payment-card flex">
		<div
			class="p-4"
			:style="{
				width: '100%',
				maxWidth: '500px',
				backgroundColor: '#333333',
			}"
		>
			<legend class="flex pr-4 justify-between">
				<div>Paying: &euro; {{ payingAmount }}</div>
				<img src="~/assets/img/visaLogo.svg" alt="Visa Logo" />
			</legend>
			<div class="flex flex-col my-4">
				<label for="card-number" class="pb-2">Card Number </label>
				<input
					type="text"
					name="card-number"
					placeholder="0000 – 0000 – 0000 – 0000"
					pattern="[0-9]{4}"
					:style="{ width: '100%', maxWidth: '280px' }"
					v-model="cardNumber"
					@change="$emit('updatePaymentCardData', cardData)"
				/>
			</div>

			<div class="flex grow justify-between my-4">
				<div class="flex grow flex-col mr-4">
					<label for="card-holder" class="pb-2">Card Holder</label>
					<input
						type="text"
						name="card-holder"
						:style="{ width: '100%', maxWidth: '280px' }"
						v-model="cardHolder"
						@change="$emit('updatePaymentCardData', cardData)"
					/>
				</div>
				<div class="flex flex-col w-1/3">
					<label for="expiration-month" class="pb-2">Expiration date</label>
					<div class="flex">
						<input
							type="number"
							min="0"
							max="31"
							pattern="\d*"
							name="expiration-month"
							:style="{ width: '100%', maxWidth: '50px' }"
							v-model="expirationMonth"
							@change="$emit('updatePaymentCardData', cardData)"
						/>
						/
						<input
							type="number"
							min="0"
							max="12"
							pattern="\d*"
							name="expiration-year"
							:style="{ width: '100%', maxWidth: '50px' }"
							v-model="expirationYear"
							@change="$emit('updatePaymentCardData', cardData)"
						/>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex flex-col justify-end p-4 pb-8 mt-4"
			:style="{
				width: '100%',
				maxWidth: '180px',
				backgroundColor: '#4F4F4F',
			}"
		>
			<label for="cvv" class="pb-2">CVC/CVV</label>
			<input
				type="number"
				min="0"
				name="cvv"
				:style="{ width: '100%', maxWidth: '110px' }"
				v-model="cvv"
				@change="$emit('updatePaymentCardData', cardData)"
			/>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	payingAmount: Number,
	mock: {
		date: Number,
		name: String,
		number: Number,
		surname: String
	}
})
const cardNumber = ref(0)
const cardHolder = ref(`${props.mock?.name}`)
const expirationMonth = ref(0)
const expirationYear = ref(0)
const cvv = ref(0)

const cardData = computed(() => {
	return {
		cardNumber: cardNumber.value,
		cardHolder: cardHolder.value,
		expirationDate: `${expirationMonth.value} / ${expirationYear.value}`,
		cvv: cvv.value,
	}
})

</script>

<style scoped>
input {
	padding: 10px;
}
.payment-card label,
legend {
	color: white;
}
</style>
