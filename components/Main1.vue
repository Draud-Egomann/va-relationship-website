<template>
  <div class="max-w-6xl mx-auto p-8">
    <!-- Title and Description -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold">Content 1</h2>
      <p class="text-gray-600">Explore the cutting-edge features that AI brings to the realm of education.</p>
    </div>

    <!-- Grid of Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card1 v-for="i in 4" />
    </div>
  </div>

</template>