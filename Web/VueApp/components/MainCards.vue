<script setup lang="ts">
import type { MainCard } from '~/composables/models/MainCard';

defineProps<{
  title: string
  text: string
  cards: MainCard[]
}>();
</script>

<template>
  <div class="py-20">
    <div class="max-w-6xl px-8 mx-auto">
      <HeroHeading :headingType="2" :title="title" :text="text" />

      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <MainCard v-for="card in cards" :card="card" />
      </div>
    </div>
  </div>
</template>