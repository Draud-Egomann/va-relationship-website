<script lang="ts" setup>
import type { MainCard } from '~/composables/models/MainCard';

defineProps<{
  card: MainCard;
}>();
</script>

<template>
  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
    <div class="rounded-lg h-64 overflow-hidden">
      <img :src="card.ImageUrl ?? ''" :alt="card.ImageAltText" :class="card.ImageClass"
        class="object-cover object-center h-full w-full" />
    </div>

    <h3 class="text-xl font-medium title-font text-neutral2 dark:text-darkNeutral2 mt-5">
      {{ card.Title }}
    </h3>

    <p class="text-base text-neutral2 dark:text-gray1 leading-relaxed mt-2">
      {{ card.Text }}
    </p>

    <NuxtLink v-if="card.hasLink" :to="card.LinkUrl ?? '/'"
      class="text-special1 dark:text-darkSpecial1Dark inline-flex items-center mt-3">
      {{ card.LinkText }}

      <fa-icon :icon="['fas', 'arrow-right']" class="mx-4" />
    </NuxtLink>
  </div>
</template>