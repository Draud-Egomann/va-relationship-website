<script setup lang="ts">
defineProps<{
  title: string
  text: string
  sections: { title: string; text: string }[]
}>()
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8">
    <div class="text-center mb-8">
      <Heading :headingType="2" :title="title" :text="text" />
    </div>

    <div class="space-y-8">
      <div v-for="(section, index) in sections" :key="index" :class="[
        'flex flex-col space-y-4',
        index % 2 === 0 ? 'md:items-start items-center' : 'md:items-end items-center'
      ]">
        <h4 class="text-primary1/80 dark:text-darkPrimary1Dark/80 text-center md:text-left">
          {{ section.title }}
        </h4>
        <p class="text-base text-gray-700 dark:text-gray1 w-full md:max-w-[80%]"
          :class="index % 2 === 0 ? 'md:text-left text-center' : 'md:text-right text-center'"
          v-html="breakPointHelper.formatText(section.text, 3)"></p>
      </div>
    </div>
  </div>
</template>
