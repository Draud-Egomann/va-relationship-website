<script setup lang="ts">
const props = defineProps<{
  items: {
    title: string
    text: string
    imageUrl: string
  }[]
  reverse?: boolean
}>()

const currentIndex = ref(0)

onMounted(() => {
  startAutoRotate()
})

function startAutoRotate() {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.items.length
  }, 2500);
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="flex flex-wrap justify-center gap-0" :class="{ 'flex-row-reverse': reverse }">

      <div class="w-full md:w-1/2">
        <img :src="items[currentIndex].imageUrl" alt="Placeholder Image"
          class="w-full transition duration-500 ease-in-out" />
      </div>

      <div class="w-full md:w-1/2 flex flex-col justify-top pt-4 md:pt-0" :class="reverse ? 'md:pr-16' : 'md:pl-16'">
        <div v-for="(item, index) in items" :key="index"
          :class="['py-4 border-l-4 transition-all duration-300', currentIndex === index ? 'border-black dark:border-white' : 'border-transparent']">
          <div class="ml-4">

            <h3 class="text-neutral2 dark:text-darkNeutral2 py-4">
              {{ item.title }}
            </h3>

            <p class="text-neutral2 dark:text-darkNeutral2">
              {{ item.text }}
            </p>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>