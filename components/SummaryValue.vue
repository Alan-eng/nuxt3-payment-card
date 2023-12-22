<template>
	<div class="text-xl font-bold">&euro; {{ payingAmount }}</div>
</template>

<script setup>
defineProps({
	payingAmount: Number,
})
</script>
