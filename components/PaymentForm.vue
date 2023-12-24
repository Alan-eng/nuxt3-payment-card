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
				<BaseInput
					v-model="cardNumber"
					type="number"
					:style="{ width: '100%', maxWidth: '280px' }"
					className="p-2"
				/>
			</div>

			<div class="flex grow justify-between my-4">
				<div class="flex grow flex-col mr-4">
					<label for="card-holder" class="pb-2">Card Holder</label>
					<BaseInput
						v-model="cardHolder"
						type="text"
						:style="{ width: '100%', maxWidth: '280px' }"
						className="p-2"
					/>
				</div>
				<div class="flex flex-col w-1/3">
					<label for="expiration-month" class="pb-2">Expiration date</label>
					<div class="flex">
						<BaseInput
							v-model="expirationMonth"
							type="number"
							:style="{ width: '100%', maxWidth: '50px' }"
							className="p-2"
						/>
						/
						<BaseInput
							v-model="expirationYear"
							type="number"
							:style="{ width: '100%', maxWidth: '50px' }"
							className="p-2"
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
			<BaseInput
				:modelValue="cvv"
				:style="{ width: '100%', maxWidth: '110px' }"
				className="p-2"
			/>
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia"
const {
	payingAmount,
	cardNumber,
	cardHolder,
	expirationMonth,
	expirationYear,
	cvv,
} = storeToRefs(usePaymentCardStore())
</script>

<style scoped>
.payment-card label,
legend {
	color: white;
}
</style>
