<script lang="ts" setup>
const props = defineProps<{
  audioPlayer: AudioPlayer;
}>();

const progress = ref(0);
const audio = ref<HTMLAudioElement | null>(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

onMounted(() => {
  audio.value = new Audio(props.audioPlayer.AudioUrl);
  audio.value.addEventListener('timeupdate', updateProgress);
  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = audio.value!.duration;
  });
});

function playPause() {
  if (isPlaying.value) {
    audio.value?.pause();
  } else {
    audio.value?.play();
  }

  isPlaying.value = !isPlaying.value;
}

function rewind() {
  audio.value!.currentTime = Math.max(audio.value!.currentTime - 10, 0);
}

function skip() {
  audio.value!.currentTime = Math.min(audio.value!.currentTime + 10, audio.value!.duration);
}

function updateProgress() {
  if (audio.value && duration.value > 0) {
    currentTime.value = audio.value.currentTime;
    progress.value = (currentTime.value / duration.value) * 100;
  }
}

function seek(event: Event) {
  const target = event.target as HTMLInputElement;
  const seekTime = (parseFloat(target.value) / 100) * duration.value;
  audio.value!.currentTime = seekTime;
  currentTime.value = seekTime;
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${mins.toString().padStart(2, '0')}:${secs}`;
  }

  return `${mins}:${secs}`;
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8">
    <div
      class="bg-accent2 border-slate-100 dark:bg-darkAccent2Dark dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8 items-center">
      <div class="flex items-center space-x-4">
        <img :src="audioPlayer.ImageUrl ?? '~/assets/images/placeholder.jpg'" :alt="audioPlayer.ImageAltText" width="80"
          height="80" :class="audioPlayer.ImageClass" class="flex-none rounded-lg bg-slate-100" loading="lazy" />

        <div class="min-w-0 flex-auto space-y-1 font-semibold">
          <h3 class="text-neutral2/75 dark:text-neutral1 text-sm leading-6 truncate">
            {{ audioPlayer.Title }}
          </h3>

          <p class="text-neutral2 dark:text-neutral1 text-lg">
            {{ audioPlayer.Creator }}
          </p>
        </div>
      </div>

      <div class="space-y-2">
        <div class="relative">
          <!-- Background track -->
          <div class="bg-neutral1 dark:bg-darkAccent1Dark rounded-full overflow-hidden h-2">
            <div class="bg-special1 dark:bg-darkSpecial1Dark h-full" :style="{ width: `${progress}%` }"></div>
          </div>

          <!-- Custom slider thumb -->
          <div class="absolute ring-special2 dark:ring-special1 ring-2 rounded-full"
            :style="{ left: `${progress}%`, top: '50%' }" style="transform: translate(-50%, -50%)">
            <div class="w-4 h-4 flex items-center justify-center bg-white rounded-full shadow">
              <div
                class="w-1.5 h-1.5 bg-special1 dark:bg-darkSpecial1Dark rounded-full ring-1 ring-inset ring-slate-900/5">
              </div>
            </div>
          </div>

          <!-- Hidden input[type="range"] -->
          <input type="range" min="0" max="100" step="0.1" :value="progress" @input="seek"
            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
        </div>

        <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
          <div class="text-base text-neutral2 dark:text-neutral1">
            {{ formatTime(currentTime) }}
          </div>
          <div class="text-base text-neutral2 dark:text-neutral1">
            {{ formatTime(duration) }}
          </div>
        </div>
      </div>
    </div>

    <div class="bg-secondary2 dark:bg-darkAccent1Dark rounded-b-xl flex items-center">
      <div class="flex-auto flex items-center justify-evenly">
        <button type="button" @click="rewind" aria-label="Rewind 10 seconds">
          <fa-icon :icon="['fas', 'backward-step']" class="text-2xl text-neutral2 dark:text-neutral1"
            aria-label="Rewind 10 seconds" />
        </button>
      </div>

      <button type="button" @click="playPause"
        class="bg-neutral1 text-neutral2 dark:bg-slate-100 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
        aria-label="Pause">
        <fa-icon :icon="['fas', isPlaying ? 'pause' : 'play']" class="text-4xl text-neutral2" aria-label="Pause" />
      </button>

      <div class="flex-auto flex items-center justify-evenly">
        <button type="button" @click="skip" aria-label="Skip 10 seconds">
          <fa-icon :icon="['fas', 'forward-step']" class="text-2xl text-neutral2 dark:text-neutral1"
            aria-label="Skip 10 seconds" />
        </button>
      </div>
    </div>
  </div>
</template>