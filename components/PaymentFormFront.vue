<template>
	<div
		class="p-4 relative z-10"
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
			<BaseInput
				v-model="cardNumber"
				type="number"
				:style="{ width: '100%', maxWidth: '280px' }"
				className="p-2"
			>
				<template #label>Card Number</template>
			</BaseInput>
		</div>

		<div class="flex grow justify-between my-4">
			<div class="flex grow flex-col mr-4">
				<BaseInput
					v-model="cardHolder"
					type="text"
					:style="{ width: '100%', maxWidth: '280px' }"
					className="p-2"
				>
					<template #label>Card Holder</template>
				</BaseInput>
			</div>
			<div class="flex flex-col w-1/3">
				<label for="expiration-month" class="pb-2 text-white"
					>Expiration date
					<div class="flex">
						<BaseInput
							v-model="expirationMonth"
							type="number"
							:style="{ width: '100%', maxWidth: '50px' }"
							className="p-2"
						>
						</BaseInput>
						/
						<BaseInput
							v-model="expirationYear"
							type="number"
							:style="{ width: '100%', maxWidth: '50px' }"
							className="p-2"
						/>
					</div>
				</label>
			</div>
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
} = storeToRefs(usePaymentCardStore())
</script>

<style scoped>
.payment-card label,
legend {
	color: white;
}
</style>
