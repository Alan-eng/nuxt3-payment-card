<template>
	<div
		class="payment-submit flex items-center justify-between mt-6 px-6 pt-2 pb-6 shadow-lg shadow-black"
	>
		<div class="flex flex-col">
			<div>
				Итого <br />
				к зачислению
			</div>
			<SummaryValue />
			<div class="text-xs font-light">Без комиссии</div>
		</div>
		<button @click="$emit('submitForm')" class="submit py-2 px-20">
			Оплатить
		</button>
	</div>
</template>


<style>
.submit {
	background-color: #000;
	color: white;
}
</style>
