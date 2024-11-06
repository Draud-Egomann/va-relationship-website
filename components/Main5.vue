<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="py-24 text-center">
      <Heading :heading-type="2" :title="'Heading 2'"
        :text="' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eum laboriosam nisi et, alias culpa officia.'"
        :text-reduced-size="true" />
    </div>

    <!-- video container -->
    <div class="flex justify-center gap-8">
      <video controls class="w-full h-full object-cover mx-auto">
        <source src="https://videos.pexels.com/video-files/29110495/12575725_2560_1440_50fps.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>