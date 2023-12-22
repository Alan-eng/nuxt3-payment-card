// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devServer: {
		port: 4000,
	},
	pages: true,
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["nuxt-primevue", "@pinia/nuxt"],
	components: {
		global: true,
		dirs: ["~/components"],
	},
	primevue: {
		components: {
			include: ["Button", "DataTable"],
		},
	},
})