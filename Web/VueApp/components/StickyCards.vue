<script lang="ts" setup>
defineProps<{
  title: string
  text: string
  cards: { title: string, text: string }[]
}>()
</script>

<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto flex flex-wrap">
      <div class="w-full md:w-1/2 mx-auto text-center p-8 md:pr-8">
        <Heading :heading-type="3" :title="title" :text="text" />
      </div>

      <div class="w-full md:w-1/2 space-y-6 relative p-8 md:p-0">
        <div v-for="(card, index) in cards" :key="index" :style="{ top: `${index * 50}px` }"
          class="sticky p-6 rounded-lg shadow-lg bg-accent1 dark:bg-darkAccent1Dark">
          <!--  Incremental top offset for overlapping effect -->
          <Heading :heading-type="6" :title="card.title" :text="card.text" />
        </div>
      </div>
    </div>
  </div>
</template>
