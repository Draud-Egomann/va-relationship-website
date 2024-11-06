<script setup lang="ts">
const people = [
  {
    name: "John Doe",
    profession: "Software Engineer",
    description: "An experienced developer in web technologies.",
    image: "https://picsum.photos/seed/code/48",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    name: "Jane Smith",
    profession: "Graphic Designer",
    description: "Specializes in UI/UX design with a passion for typography.",
    image: "https://picsum.photos/seed/uiux/48",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    name: "Alice Johnson",
    profession: "Product Manager",
    description: "Focused on delivering seamless user experiences.",
    image: "https://picsum.photos/seed/tea/48",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    name: "Bob Lee",
    profession: "Data Scientist",
    description: "Expert in machine learning and data analytics.",
    image: "https://picsum.photos/seed/bread/48",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
]
</script>


<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="py-24 text-center">
      <Heading :heading-type="2" :title="'Finde die von KI generierten Sprachaufnahme'"
        :text="'I never thought AI could have such a profound impact on education until I came across this website. The insights shared here are truly remarkable.'"
        :text-reduced-size="true" />
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