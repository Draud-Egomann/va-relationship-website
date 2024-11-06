<script setup lang="ts">
const cards = [
  { title: "Card 1", content: "Description for the first card." },
  { title: "Card 2", content: "Description for the second card." },
  { title: "Card 3", content: "Description for the third card." },
  { title: "Card 4", content: "Description for the fourth card." },
];
</script>

<template>
  <div class="py-20">
    <div class="max-w-7xl mx-auto flex">
      <div class="w-1/2 pr-8">
        <Heading :heading-type="3" :title="'Cards Section'"
          :text="'Here is some introductory text explaining the content of the cards. As you scroll down, youll see each card layer over the previous one, creating an overlapping visual effect.'" />
      </div>

      <div class="w-1/2 space-y-6 relative">
        <div v-for="(card, index) in cards" :key="index" :style="{ top: `${index * 50}px` }"
          class="sticky p-6 rounded-lg shadow-lg bg-accent1 dark:bg-darkAccent1Dark">
          <!--  Incremental top offset for overlapping effect -->
          <Heading :heading-type="6" :title="card.title" :text="card.content" />
        </div>
      </div>
    </div>
  </div>
</template>
