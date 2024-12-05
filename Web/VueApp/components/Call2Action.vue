<script lang="ts" setup>
defineProps<{
  title: string,
  text: string,
  ctaText: string
}>()

const emit = defineEmits(['onButtonClicked']);
</script>

<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto relative">
      <div
        class="absolute top-2 left-2 w-full h-full bg-accent2 dark:bg-darkAccent2Dark transform -skew-y-2 rounded-lg">
      </div>

      <div class="relative p-6 bg-accent1 dark:bg-darkAccent1Dark rounded-lg shadow-lg">
        <div class="flex justify-between">

          <div class="w-4/5 mb-4">
            <Heading :heading-type="4" :title="title" :text="text" />
          </div>

          <div class="w-1/5 h-fit flex justify-center m-auto">
            <button @click="emit('onButtonClicked')"
              class="bg-primary1 dark:bg-darkPrimary1Dark text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300">
              {{ ctaText }}
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>