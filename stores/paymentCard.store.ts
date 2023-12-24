export const usePaymentCardStore = defineStore("paymentCard", {
	state: () => ({
		payingAmount: 160,
		cardNumber: 222,
		cardHolder: "Alan",
		expirationMonth: 12,
		expirationYear: 22,
		cvv: 123,
	}),
	actions: {
		// async fetch() {
		// 	const infos = await $fetch("https://api.nuxt.com/modules/pinia")
		// 	this.name = infos.name
		// 	this.description = infos.description
		// },
	},
})
