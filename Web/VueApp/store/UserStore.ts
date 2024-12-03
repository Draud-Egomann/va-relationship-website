export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(false)

  return { loggedIn }
})