<script lang="ts" setup>
const props = defineProps<{
  slides: Slide[]
}>();

const currentSlide = ref(0);

function next() {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;
}

function previous() {
  currentSlide.value =
    (currentSlide.value - 1 + props.slides.length) % props.slides.length;
}

function goToSlide(index: number) {
  currentSlide.value = index;
}
</script>

<template>
  <div class="max-w-2xl mx-auto p-8">
    <div id="default-carousel" class="relative">

      <!-- Carousel wrapper -->
      <div class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <div v-for="(slide, index) in slides" :key="index" class="absolute inset-0 duration-700 ease-in-out"
          :class="{ hidden: index !== currentSlide, block: index === currentSlide }">
          <img :src="slide.ImageUrl" :alt="slide.ImageAltText"
            class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" />

          <span v-if="slide.Text"
            class="absolute top-1/2 left-1/2 z-10 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800 text-outline">
            {{ slide.Text }}
          </span>
        </div>
      </div>
    
      <!-- Slider indicators -->
      <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)" :class="{
          'bg-neutral1/60': index !== currentSlide,
          'bg-neutral1': index === currentSlide,
        }" class="w-3 h-3 rounded-full" :aria-label="'Slide ' + (index + 1)"></button>
      </div>
    
      <!-- Slider controls -->
      <button type="button"
        class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        @click="previous" aria-label="Previous">
        <span
          class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-primary1/80 dark:bg-darkPrimary1Dark/80 group-hover:bg-primary2/80 dark:group-hover:bg-darkPrimary2Dark/80 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <fa-icon :icon="['fas', 'chevron-left']" class="text-white sm:w-6 sm:h-6" />
        </span>
      </button>

      <button type="button"
        class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        @click="next" aria-label="Next">
        <span
          class="inline-flex justify-center items-center w-8 h-8 rounded-full bg-primary1/80 dark:bg-darkPrimary1Dark/80 group-hover:bg-primary2/80 dark:group-hover:bg-darkPrimary2Dark/80 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <fa-icon :icon="['fas', 'chevron-right']" class="text-white sm:w-6 sm:h-6" />
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.text-outline {
  @apply text-shadow-[-1px_-1px_0_black, 1px_-1px_0_black, -1px_1px_0_black, 1px_1px_0_black] dark:text-shadow-[-1px_-1px_0_white, 1px_-1px_0_white, -1px_1px_0_white, 1px_1px_0_white];
}
</style>