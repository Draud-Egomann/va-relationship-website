<script lang="ts" setup>
defineProps<{
  src: string;
  alt: string;
  class: string;
}>();

const isOpen = ref(false);

const openImage = () => {
  isOpen.value = true;
}

const closeImage = () => {
  isOpen.value = false;
}
</script>

<template>
  <div class="relative">
    <img :src="src" :alt="alt" :class="class" class="cursor-pointer transition-transform hover:scale-105 select-none"
      @click="openImage" draggable="false" />

    <!-- Full-Width Modal -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      @click="closeImage">
      <img :src="src" :alt="alt" class="max-w-full max-h-full cursor-pointer select-none" draggable="false" aria-hidden="true" />
    </div>
  </div>
</template>