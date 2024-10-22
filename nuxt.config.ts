// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@sidebase/nuxt-auth"],

  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },

  appConfig: {
    title: "Removal",
    description: "Your Image. Your way.",
  },

  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: "authjs",
    },
  },
});
