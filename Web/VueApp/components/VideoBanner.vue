<script setup lang="ts">
defineProps<{
  videoUrl: string
  title: string
  description: string
  linkText: string | null
  linkUrl: string | null
}>()
</script>

<template>
  <section class="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
    <!-- Video Background -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source :src="videoUrl" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Text Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2 class="text-neutral1 text-3xl lg:text-5xl font-bold mb-4">
        {{ title }}
      </h2>
      <p class="text-neutral1 text-lg lg:text-xl max-w-2xl mb-6">
        {{ description }}
      </p>
      <div v-if="!stringHelper.IsNullOrEmpty(linkUrl) && !stringHelper.IsNullOrEmpty(linkText)">
        <NuxtLink :to="linkUrl ?? '/'"
          class="px-6 py-3 bg-primary1 hover:bg-primary2 text-neutral1 font-semibold rounded">
          {{ linkText }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>