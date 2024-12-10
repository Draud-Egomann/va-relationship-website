<script lang="ts" setup>
import type { HorizontalCard } from '../composables/models/HorizontalCard';

defineProps<{
  horizontalCard: HorizontalCard;
}>();
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8">
    <div
      class="relative flex bg-clip-border rounded-xl bg-accent2 dark:bg-darkAccent1Dark shadow-md flex-col md:flex-row">
      <div
        class="relative w-full md:w-2/5 m-0 overflow-hidden bg-white dark:bg-darkAccent1Dark rounded-r-none bg-clip-border rounded-xl shrink-0">
        <img :src="horizontalCard.ImageUrl ?? ''" :alt="horizontalCard.ImageAltText" :class="horizontalCard.ImageClass"
          class="object-cover w-full h-full" />
      </div>
      <div class="p-6">
        <h6
          class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 dark:text-special1 uppercase">
          {{ horizontalCard.SubTitle }}
        </h6>

        <h4
          class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-neutral2 dark:text-darkNeutral2">
          {{ horizontalCard.Title }}
        </h4>

        <p
          class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-neutral2 dark:text-gray-300">
          {{ horizontalCard.Text }}
        </p>

        <NuxtLink v-if="!horizontalCard.HasLink" :to="horizontalCard.LinkUrl ?? '/'" class="inline-block">
          <button
            class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 dark:text-darkNeutral2 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 dark:hover:bg-gray-400/10 active:bg-gray-900/20 dark:active:bg-gray-400/20"
            type="button">
            {{ horizontalCard.Link }}

            <fa-icon :icon="['fas', 'arrow-right']" class="w-4 h-4" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>