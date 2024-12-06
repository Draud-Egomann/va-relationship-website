<template>
  <main
    class="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-special1 dark:text-darkSpecial1Dark">404</h1>
      <p class="text-2xl text-black/80 dark:text-gray1 mt-4">Ups! Seite nicht gefunden.</p>
      <p class="mt-2 text-lg text-black/80 dark:text-gray1">
        Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
      </p>
      <div class="mt-6">
        <a href="/"
          class="px-6 py-3 bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-700 hover:text-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-900 transition">
          Zurück zur Startseite
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead(() => ({
  status: 404,
  title: "Seite nicht gefunden",
}));
</script>
