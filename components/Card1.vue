<script setup lang="ts">
defineProps<{
  card: Card
}>()
</script>

<template>
  <div class="text-center">
    <img :src="card.ImageUrl" :alt="card.ImageAltText" :class="card.ImageClass"
      class="mx-auto rounded-full w-20 h-20 mb-4" />
    <h3 class="text-xl font-semibold">{{ card.Title }}</h3>
    <p class="text-gray-600">{{ card.Text }}</p>
  </div>
</template>