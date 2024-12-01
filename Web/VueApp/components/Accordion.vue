<script lang="ts" setup>
defineProps<{
  title: string
}>();

const isOpen = ref(false);

function toggleAccordion() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="border-b border-gray-300">

    <button @click="toggleAccordion()"
      class="w-full text-left flex justify-between items-center p-4 focus:outline-none focus:ring">
      <span class="text-neutral2 dark:text-darkNeutral2 text-xl font-semibold">
        {{ title }}
      </span>

      <fa-icon :icon="['fas', 'chevron-down']"
        class="h-5 w-5 text-neutral2 dark:text-darkNeutral2 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }" />
    </button>

    <div class="border-t border-gray-400/60"></div>

    <div v-if="isOpen" class="p-4 text-neutral2 dark:text-darkNeutral2 text-base">
      <slot />
    </div>

  </div>
</template>