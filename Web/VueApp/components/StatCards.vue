<script setup lang="ts">
defineProps<{
  title: string
  text: string
  StatCards: {
    heading: string
    value: string
    description: string
  }[]
}>();

</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="text-center mb-8">
      <Heading :headingType="2" :title="title" :text="text" />
    </div>

    <div class="flex gap-4 justify-center">
      <StatCard v-for="(item, index) in StatCards" :key="index" :heading="item.heading" :value="item.value"
        :description="item.description" />
    </div>
  </div>
</template>
