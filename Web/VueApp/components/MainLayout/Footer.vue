<template>
  <div class="flex flex-col bg-gray-200/80 dark:bg-gray-800/40">
    <div class="w-full">
      <div class="container flex flex-col mx-auto">
        <div class="flex flex-col items-center w-full my-8">
          <span class="mb-6">
            <img src="~/assets/images/logo.png" alt="Logo" width="128" class="pointer-events-none" />
          </span>

          <div class="flex flex-col items-center gap-6 mb-6">
            <div
              class="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
              <NuxtLink to="/" class="text-gray-700 dark:text-gray1 hover:text-primary2 dark:hover:text-darkSpecial1Dark">About</NuxtLink>
              <NuxtLink to="/" class="text-gray-700 dark:text-gray1 hover:text-primary2 dark:hover:text-darkSpecial1Dark">Features</NuxtLink>
              <NuxtLink to="/" class="text-gray-700 dark:text-gray1 hover:text-primary2 dark:hover:text-darkSpecial1Dark">Blog</NuxtLink>
              <NuxtLink to="/" class="text-gray-700 dark:text-gray1 hover:text-primary2 dark:hover:text-darkSpecial1Dark">Resources</NuxtLink>
              <NuxtLink to="/" class="text-gray-700 dark:text-gray1 hover:text-primary2 dark:hover:text-darkSpecial1Dark">Partners</NuxtLink>
              <NuxtLink to="/" class="text-gray-700 dark:text-gray1 hover:text-primary2 dark:hover:text-darkSpecial1Dark">Help</NuxtLink>
              <NuxtLink to="/" class="text-gray-700 dark:text-gray1 hover:text-primary2 dark:hover:text-darkSpecial1Dark">Terms</NuxtLink>
            </div>
          </div>

          <p class="text-black dark:text-white text-base font-normal leading-7 text-center text-grey-700">
            © 2024 Dominic Tosku &#x26; Justin Urbanek
          </p>
          <p class="text-black dark:text-white text-base font-normal leading-7 text-center text-grey-700">
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>