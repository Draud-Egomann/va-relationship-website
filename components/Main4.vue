<script setup lang="ts">
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="py-24 text-center">
      <h2 class="text-neutral2 dark:text-darkNeutral2 my-8">
        heading 2
      </h2>
      <p class="text-neutral2 dark:text-gray1 w-3/4 mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eum laboriosam nisi et, alias culpa officia
        neque omnis facilis impedit hic maiores rem temporibus quaerat quia corrupti ullam ad ipsam.
      </p>
    </div>

    <!-- image container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <img v-for="i in 8" src="https://picsum.photos/200/280" alt="Placeholder Image" class="w-full" />
    </div>
  </div>
</template>