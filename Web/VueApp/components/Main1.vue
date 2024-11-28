<script setup lang="ts">
defineProps<{
  title: string
  text: string
  cards: Card[]
}>()
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="text-center mb-8">
      <Heading :headingType="2" :title="title" :text="text" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card1 v-for="card in cards" :card="card" />
    </div>
  </div>
</template>