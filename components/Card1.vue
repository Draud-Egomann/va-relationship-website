<script setup lang="ts">
defineProps<{
  card: Card
}>()
</script>

<template>
  <div class="text-center">
    <img :src="card.ImageUrl" :alt="card.ImageAltText" :class="card.ImageClass"
      class="mx-auto rounded-full w-20 h-20 mb-4" />
    <Heading :heading-type="6" :title="card.Title" :text="card.Text" />
  </div>
</template>