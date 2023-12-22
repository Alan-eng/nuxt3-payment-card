<template>
	<i class="icon">&euro; </i>
	<input
		class="border-solid border-2 border-black pl-4"
		type="number"
		name="paying"
		placeholder="0"
		v-model="payingAmount"
	/>
</template>

<script>
const payingAmount = ref(159)
</script>

<style scoped>
.icon {
	position: absolute;
}

input[type="number"] {
	color: #000;
	appearance: textfield;
	-webkit-appearance: none;
	-moz-appearance: textfield;
}
</style>
