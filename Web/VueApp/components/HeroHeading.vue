<script lang="ts" setup>
defineProps<{
  headingType: number
  title: string
  text: string
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="h-1 bg-gray-800 rounded overflow-hidden">
      <div class="w-24 h-full bg-special1 dark:bg-darkSpecial1Dark"></div>
    </div>
    <div class="mb-16">
      <Heading :headingType="2" :title="title" :text="text" />
    </div>
  </div>
</template>