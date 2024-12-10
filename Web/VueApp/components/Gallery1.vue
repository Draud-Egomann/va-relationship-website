<script setup lang="ts">
defineProps<{
  title: string
  text: string
  images: ImageBaseItem[]
}>()
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8">
    <div class="py-24 text-center">
      <Heading :heading-type="2" :title="title" :text="text" :text-reduced-size="true" />
    </div>

    <!-- image container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <img v-for="image in images" :src="image.ImageUrl ?? ''" :alt="image.ImageAltText" :class="image.ImageClass"
        class="w-full" />
    </div>
  </div>
</template>