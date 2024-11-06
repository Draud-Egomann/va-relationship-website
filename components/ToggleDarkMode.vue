<script setup lang="ts">
// https://tailwindcss.com/docs/dark-mode
const isDarkMode = ref(false)

onMounted(() => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  isDarkMode.value = document.documentElement.classList.contains('dark')
})

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')

  localStorage.theme = isDarkMode.value ? 'dark' : 'light'
}
</script>

<template>
  <div class="flex items-center space-x-4">
    <span class="text-neutral2 dark:text-darkNeutral2 font-medium">
      Dark Mode
    </span>

    <!-- Toggle Switch -->
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode" class="sr-only peer">
      <div
        class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-primary1 dark:peer-checked:bg-darkPrimary1Dark transition duration-300">
      </div>
      <div
        class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transform transition-transform duration-300 dark:bg-gray-300">
      </div>
    </label>
  </div>
</template>