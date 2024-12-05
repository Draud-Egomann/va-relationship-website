<script lang="ts">
defineProps<{
  title: string
  text: string
  videoUrl: string
}>()
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="py-24 text-center">
      <Heading :heading-type="2" :title="title"
        :text="text"
        :text-reduced-size="true" />
    </div>

    <!-- video container -->
    <div class="flex justify-center gap-8">
      <video controls class="w-full h-full object-cover mx-auto">
        <source :src="videoUrl" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>