<script lang="ts" setup>

const links = DataProvider.GetHeaderLinks();
const dropdown = ref<string | null>(null);
const isMobileMenuOpen = ref(false);
const isHeaderVisible = ref(true);

function toggleDropdown(linkName: string) {
  dropdown.value = dropdown.value === linkName ? null : linkName;
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    isHeaderVisible.value = false; // Hide header on scroll down
  } else {
    isHeaderVisible.value = true; // Show header on scroll up
  }
  lastScrollY = currentScrollY;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="[
    'fixed w-full z-50 bg-gradient-to-l from-accent1 to-accent2 dark:from-darkAccent1Dark dark:to-darkPrimary2Dark shadow-md transition-transform duration-300',
    isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
  ]">
    <nav class="container mx-auto flex items-center justify-between p-4">
      <NuxtLink to="/" class="flex items-center">
        <img src="~/assets/images/logo.png" alt="Logo" width="80" class="pointer-events-none" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center space-x-6">
        <li v-for="link in links" :key="link.title" class="relative group flex items-center">
          <NuxtLink to="/"
            class="text-neutral2 dark:text-neutral1 hover:bg-accent1 dark:hover:bg-primary1 px-4 py-2 rounded transition duration-300">
            {{ link.title }}
          </NuxtLink>
          <button @click="toggleDropdown(link.title)" class="ml-2 text-neutral2 dark:text-neutral1 focus:outline-none">
            <fa-icon :icon="['fas', 'chevron-down']" class="transition"
              :class="{ 'rotate-180': dropdown == link.title }" />
          </button>

          <ul v-if="dropdown === link.title"
            class="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-md">
            <NuxtLink to="#">
              <li v-for="sublink in link.sublinks" :key="sublink"
                class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
                {{ sublink }}
              </li>
            </NuxtLink>
          </ul>
        </li>
      </ul>

      <!-- Mobile Burger Icon -->
      <button @click="toggleMobileMenu"
        class="block md:hidden text-neutral2 dark:text-neutral1 focus:outline-none pr-4">
        <fa-icon :icon="['fas', 'bars']" class="text-3xl" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 text-black dark:text-white shadow-md">
      <ul class="flex flex-col items-start space-y-4 px-4 py-4">
        <li v-for="link in links" :key="link.title" class="flex flex-col items-start w-full">
          <div class="flex items-center w-full">
            <span
              class="flex-1 text-left text-neutral2 dark:text-neutral1 hover:bg-accent1 dark:hover:bg-primary1 px-4 py-2 rounded transition duration-300">
              {{ link.title }}
            </span>
            <button @click="toggleDropdown(link.title)"
              class="ml-2 text-neutral2 dark:text-neutral1 focus:outline-none">
              <fa-icon :icon="['fas', 'chevron-down']" class="transition"
                :class="{ 'rotate-180': dropdown == link.title }" />
            </button>
          </div>

          <!-- Mobile Dropdown -->
          <ul v-if="dropdown === link.title"
            class="w-full mt-2 bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-md">
            <li v-for="sublink in link.sublinks" :key="sublink"
              class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200">
              <a href="#">{{ sublink }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>