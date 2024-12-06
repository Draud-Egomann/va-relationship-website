export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(true)

  return { loggedIn }
})