<script lang="ts" setup>
defineProps<{
  heading: string;
  value: string;
  description: string;
}>();
</script>

<template>
  <div class="bg-accent1 dark:bg-darkAccent1Dark shadow-md rounded-lg p-6 flex flex-col items-center">
    <h3 class="text-neutral2 dark:text-darkNeutral2 font-medium text-sm">{{ heading }}</h3>
    <p class="text-neutral2 dark:text-darkSpecial1Dark text-2xl font-bold">{{ value }}</p>
    <span class="text-neutral2 dark:text-darkNeutral2 text-sm mt-1 text-center">{{ description }}</span>
  </div>
</template>