<script setup lang="ts">
defineProps<{
  title: string
  text: string
  sections: { title: string; text: string }[]
}>()
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="text-center mb-8">
      <Heading :headingType="2" :title="title" :text="text" />
    </div>

    <div class="space-y-8">
      <div v-for="(section, index) in sections" :key="index" :class="[
        'flex flex-col space-y-4',
        index % 2 === 0 ? 'items-start' : 'items-end'
      ]">
        <h4 class="text-primary1/80 dark:text-darkPrimary1Dark/80">
          {{ section.title }}
        </h4>
        <p class="text-base text-gray-700 dark:text-gray1 max-w-[80%]" :class="index % 2 === 0 ? 'text-left' : 'text-right'">
          {{ section.text }}
        </p>
      </div>
    </div>
  </div>
</template>
