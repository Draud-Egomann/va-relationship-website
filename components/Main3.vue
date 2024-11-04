<template>
  <section class="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
    <!-- Video Background -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source src="https://videos.pexels.com/video-files/6752408/6752408-uhd_2160_4096_25fps.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>

    <!-- Text Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 class="text-neutral1 text-3xl lg:text-5xl font-bold mb-4">Engaging Video Banner Title</h1>
      <p class="text-neutral1 text-lg lg:text-xl max-w-2xl mb-6">
        Brief description that aligns with the website's message, adding more context or information.
      </p>
      <a href="#your-cta-link" class="px-6 py-3 bg-primary1 hover:bg-primary2 text-neutral1 font-semibold rounded">
        Learn More
      </a>
    </div>
  </section>
</template>