<template>
  <div>
    <NuxtRouteAnnouncer />
    <div id="layout" class="mx-4 lg:mx-44">
      <Navbar />
      <NuxtPage />
      <MainFooter />
    </div>
  </div>
  <UNotifications />
</template>
<script setup lang="ts">
const appConfig = useAppConfig();
useHead({
  titleTemplate: (titleChunk: string | undefined): any => {
    return titleChunk ? `${titleChunk} | ${appConfig.title}` : appConfig.title;
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

* {
  font-family: "Outfit", sans-serif;
  transition: all 0.3s ease;
}

body {
  @apply dark:dark:bg-[#1E1E2C] min-w-[300px];
}
</style>
