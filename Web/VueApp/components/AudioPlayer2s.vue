<script lang="ts" setup>
defineProps<{
  audioPlayers: AudioPlayer[];
}>();
</script>

<template>
  <div class="flex flex-wrap max-w-7xl mx-auto p-8">
    <AudioPlayer v-for="audioPlayer in audioPlayers" :audioPlayer="audioPlayer" class="w-full lg:w-1/2" />
  </div>
</template>