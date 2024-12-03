import { useUserStore } from "~/store/UserStore"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useUserStore()

  if (to.path == '/Auth/Login') return
  else if (!store.loggedIn) return navigateTo('/Auth/Login')
})