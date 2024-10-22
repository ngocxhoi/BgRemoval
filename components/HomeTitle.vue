<template>
  <h1
    class="text-center capitalize text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent"
  >
    <template v-if="title">
      <span>{{ title }}</span>
    </template>
    <template v-else>
      <slot />
    </template>
  </h1>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>
