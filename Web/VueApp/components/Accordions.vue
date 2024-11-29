<script lang="ts" setup>
defineProps<{
  title: string
  text: string
  accordions: {
    title: string
    content: string
  }[]
}>();
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="text-center mb-8">
      <Heading :headingType="2" :title="title" :text="text" />
    </div>

    <Accordion v-for="(item, index) in accordions" :key="index" :title="item.title">
      {{ item.content }}
    </Accordion>
  </div>
</template>