export const useDarkModeStore = defineStore('darkMode', () => {
  // https://tailwindcss.com/docs/dark-mode
  const isDarkMode = ref(false)

  const onLoad = () => {
    // Default to dark mode if no preference is stored in localStorage
    const prefersDarkMode = !('theme' in localStorage) || localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    document.documentElement.classList.toggle('dark', prefersDarkMode)
    localStorage.theme = prefersDarkMode ? 'dark' : 'light'

    isDarkMode.value = document.documentElement.classList.contains('dark')
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle('dark', isDarkMode.value)
    localStorage.theme = isDarkMode.value ? 'dark' : 'light'
  }

  return { isDarkMode, onLoad, toggleDarkMode }
})