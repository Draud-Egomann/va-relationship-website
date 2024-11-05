<script setup lang="ts">
defineProps<{
  headingType: number,
  title: string,
  text: string
}>()
</script>

<template>
  <div class="mx-auto container">
    <div class="py-24 text-center">
      <Heading :heading-type="headingType" :title="title" :text="text" :text-reduced-size="true" />
    </div>
  </div>
</template>