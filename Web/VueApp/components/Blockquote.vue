<script setup lang="ts">
defineProps<{
  author: string;
}>();
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <blockquote
      class="relative text-neutral2 dark:text-darkNeutral2 text-center text-lg p-10 w-full m-1 blockquote-corners">

      <fa-icon :icon="['fas', 'quote-left']" class="absolute text-primary1 dark:text-darkPrimary1Dark text-3xl"
        style="top: -12px; margin-right: -20px; right: 100%;" />

      <fa-icon :icon="['fas', 'quote-right']" class="absolute text-primary1 dark:text-darkPrimary1Dark text-3xl"
        style="margin-left: -20px; left: 100%; bottom: -20px;" />

      <slot />

      <cite v-if="!stringHelper.IsNullOrEmpty(author)" class="block mt-4 text-neutral2 dark:text-darkNeutral2">
        - {{ author }}
      </cite>
    </blockquote>
  </div>
</template>

<style scoped>
.blockquote-corners {
  background:
    linear-gradient(to right, #0060b9 6px, transparent 4px) 0 100%,
    linear-gradient(to left, #0060b9 6px, transparent 4px) 100% 0,
    linear-gradient(to bottom, #0060b9 6px, transparent 4px) 100% 0,
    linear-gradient(to top, #0060b9 6px, transparent 4px) 0 100%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
}
</style>