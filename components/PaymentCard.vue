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
					:style="{ width: '100%', maxWidth: '280px' }"
				/>
			</div>

			<div class="flex grow justify-between my-4">
				<div class="flex grow flex-col mr-4">
					<label for="card-holder" class="pb-2">Card Holder</label>
					<input
						type="text"
						name="card-holder"
						:style="{ width: '100%', maxWidth: '280px' }"
					/>
				</div>
				<div class="flex flex-col w-1/3">
					<label for="card-date" class="pb-2">Expiration date</label>
					<div class="flex">
						<input
							type="number"
							name="expiration-date"
							:style="{ width: '100%', maxWidth: '50px' }"
						/>
						/
						<input
							type="number"
							name="expiration-date"
							:style="{ width: '100%', maxWidth: '50px' }"
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
				type="text"
				name="cvv"
				:style="{ width: '100%', maxWidth: '110px' }"
			/>
		</div>
	</div>
</template>

<script setup>
defineProps({
	payingAmount: Number,
})
</script>

<style>
input {
	padding: 10px;
}
.payment-card label,
legend {
	color: white;
}
</style>
