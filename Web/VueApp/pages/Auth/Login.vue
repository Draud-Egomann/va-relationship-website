<script setup lang="ts">
definePageMeta({
  layout: 'login',
})

const isPasswordVisible = ref(false);

const togglePassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col sm:justify-center items-center">
    <div class="relative sm:max-w-md w-full">
      <div
        class="bg-primary1 dark:bg-darkPrimary1Dark shadow-lg w-full h-full rounded-2xl absolute transform -rotate-6">
      </div>
      <div class="bg-primary2 dark:bg-darkPrimary2Dark shadow-lg w-full h-full rounded-2xl absolute transform rotate-6">
      </div>

      <div class="relative w-full rounded-2xl px-6 py-8 bg-gray-200 dark:bg-darkAccent1Dark shadow-md">
        <h1 class="text-neutral2 dark:text-darkNeutral2 text-center text-4xl py-2">
          Login
        </h1>

        <p class="text-base text-center text-neutral2 dark:text-darkNeutral2 my-4">
          Bestimmte Abschnitte der Seite sind geschützt. Sie müssen das Passwort eingeben, um fortzufahren.
        </p>

        <form method="#" action="#">
          <div class="mt-5 relative">
            <input :type="isPasswordVisible ? 'text' : 'password'" placeholder="Passwort eingeben"
              class="p-2 w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none" />

            <button type="button" @click="togglePassword"
              class="absolute inset-y-0 right-6 flex items-center cursor-pointer">
              <fa-icon :icon="['fas', isPasswordVisible ? 'eye-slash' : 'eye']" class="text-gray-600" />
            </button>
          </div>

          <div class="mt-5">
            <button type="submit"
              class="w-full py-3 rounded-lg text-neutral1 bg-primary1 dark:bg-darkPrimary1Dark hover:bg-primary2 transform-gpu duration-300 shadow-md hover:shadow-inner focus:ring-2 focus:ring-gray-600 focus:outline-none">
              Einloggen
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>