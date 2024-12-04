<script lang="ts" setup>
import { useDarkModeStore } from "~/store/DarkModeStore"

const darkModeStore = useDarkModeStore();
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
    dropdown.value = null; // Close dropdown on scroll
  } else {
    isHeaderVisible.value = true; // Show header on scroll up
  }
  lastScrollY = currentScrollY;
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;

  // Check if the click is outside dropdown or toggle button
  const dropdownMenus = document.querySelectorAll('.dropdown-menu, .dropdown-toggle');
  const clickedInsideDropdown = Array.from(dropdownMenus).some(el => el.contains(target));

  if (!clickedInsideDropdown) {
    dropdown.value = null; // Close dropdown
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('click', handleClickOutside);
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

          <div v-if="link.sublinks.length > 0">
            <button @click="toggleDropdown(link.title)"
              class="ml-2 text-neutral2 dark:text-neutral1 focus:outline-none dropdown-toggle">
              <fa-icon :icon="['fas', 'chevron-down']" class="transition"
                :class="{ 'rotate-180': dropdown == link.title }" />
            </button>

            <ul v-if="dropdown === link.title"
              class="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-md dropdown-menu">
              <NuxtLink to="#">
                <li v-for="sublink in link.sublinks" :key="sublink"
                  class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
                  {{ sublink }}
                </li>
              </NuxtLink>
            </ul>
          </div>
        </li>
      </ul>

      <!-- Dark Mode Toggle Button -->
      <button @click="darkModeStore.toggleDarkMode"
        class="ml-4 flex items-center justify-center w-10 h-10 text-neutral2 bg-neutral1 rounded-full shadow-md transition-transform duration-300 focus:outline-none"
        :title="darkModeStore.isDarkMode ? 'In den hellen Modus wechseln' : 'In den dunklen Modus wechseln'">
        <fa-icon :icon="darkModeStore.isDarkMode ? 'sun' : 'moon'" class="text-lg" />
      </button>

      <!-- Mobile Burger Icon -->
      <button @click="toggleMobileMenu"
        class="block md:hidden text-neutral2 dark:text-neutral1 focus:outline-none pr-4">
        <fa-icon :icon="isMobileMenuOpen ? ['fas', 'xmark'] : ['fas', 'bars']" class="text-3xl" />
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
              class="ml-2 text-neutral2 dark:text-neutral1 focus:outline-none pr-4 md:pr-0">
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