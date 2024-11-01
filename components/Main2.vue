<template>
  <div class="max-w-6xl mx-auto p-8">
    <!-- Timeline Dates -->
    <div class="flex items-center justify-between mb-8">
      <button class="text-gray-400 hover:text-gray-600">
        <!-- Left Arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="flex items-center space-x-4">
        <span class="text-gray-400">12/05/2023</span>
        <span class="text-gray-400">17/08/2023</span>
        <span class="font-bold text-black">24/03/2023</span> <!-- Active date -->
        <span class="text-gray-400">02/01/2024</span>
      </div>
      <button class="text-gray-400 hover:text-gray-600">
        <!-- Right Arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Timeline Entry -->
    <div class="flex flex-col md:flex-row items-start md:items-center gap-8">
      <!-- Text Content -->
      <div class="md:w-1/2">
        <p class="text-gray-600 mb-2">24/03/2023</p>
        <h3 class="text-2xl font-bold mb-4">Timeline Entry 1</h3>
        <p class="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <!-- Buttons -->
        <div class="space-x-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">Primary action</button>
          <button class="border border-blue-600 text-blue-600 px-4 py-2 rounded">Secondary action</button>
        </div>
      </div>

      <!-- Image Content -->
      <div class="md:w-1/2">
        <img src="https://picsum.photos/200" alt="Timeline Image" class="w-full h-auto rounded-lg shadow-md">
      </div>
    </div>
  </div>
</template>