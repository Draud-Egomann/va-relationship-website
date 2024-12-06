<script setup lang="ts">
defineProps<{
  title: string
  text: string
  people: {
    name: string
    profession: string
    description: string
    image: string
    audio: string
  }[]
}>()
</script>


<template>
  <div class="max-w-6xl mx-auto md:p-8">
    <div class="py-24 text-center">
      <Heading :heading-type="2" :title="title" :text="text" :text-reduced-size="true" />
    </div>

    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

      <div v-for="(person, index) in people" :key="index"
        class="p-4 rounded-lg bg-accent1 dark:bg-darkAccent1Dark text-neutral2 dark:text-darkNeutral2">

        <div class="flex items-center mb-4">
          <img :src="person.image" alt="Profile Picture" class="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 class="text-neutral2 dark:text-darkNeutral2 font-semibold">{{ person.name }}</h3>
            <p class="text-neutral2 dark:text-darkNeutral2 text-sm italic ">{{ person.profession }}</p>
          </div>
        </div>

        <p class="text-neutral2 dark:text-darkNeutral2 text-sm mb-4">{{ person.description }}</p>

        <audio :src="person.audio" controls class="w-full mt-2"></audio>
      </div>
    </div>
  </div>
</template>