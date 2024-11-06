<script setup lang="ts">
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="py-24 text-center">
      <Heading :heading-type="2" :title="'Heading 2'"
        :text="' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eum laboriosam nisi et, alias culpa officia.'"
        :text-reduced-size="true" />
    </div>

    <!-- image container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <img v-for="i in 8" src="https://picsum.photos/200/280" alt="Placeholder Image" class="w-full" />
    </div>
  </div>
</template>