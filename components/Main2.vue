<script setup lang="ts">
const props = defineProps<{
  blogs: BlogEntry[]
}>()

let selectedBlog = ref(props.blogs[0])

function setActiveTimeline(blog) {
  selectedBlog.value = blog
}

function prevTimeline() {
  const currentIndex = props.blogs.indexOf(selectedBlog.value)
  const prevIndex = currentIndex - 1
  if (prevIndex >= 0) {
    selectedBlog.value = props.blogs[prevIndex]
  }
}

function nextTimeline() {
  const currentIndex = props.blogs.indexOf(selectedBlog.value)
  const nextIndex = currentIndex + 1
  if (nextIndex < props.blogs.length) {
    selectedBlog.value = props.blogs[nextIndex]
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="flex items-center justify-between mb-8">
      <button @click="prevTimeline()" class="text-gray-400 hover:text-gray-600">
        <fa-icon icon="arrow-left" />
      </button>

      <div class="flex items-center space-x-4">
        <button v-for="blog in props.blogs" :key="blog.date" :class="{ 'active': selectedBlog == blog }"
          @click="setActiveTimeline(blog)" class="text-gray-400">
          {{ blog.FormattedDate }}
        </button>
      </div>

      <button @click="nextTimeline()" class="text-gray-400 hover:text-gray-600">
        <fa-icon icon="arrow-right" />
      </button>
    </div>

    <div class="flex flex-col md:flex-row items-start md:items-center gap-8">
      <div class="md:w-1/2">
        <p class="text-gray-600 mb-2">
          {{ selectedBlog.FormattedDate }}
        </p>
        <h3 class="text-2xl font-bold mb-4">
          {{ selectedBlog.Title }}
        </h3>
        <p class="text-gray-600 mb-6">
          {{ selectedBlog.Text }}
        </p>

        <div class="space-x-4">
          <button v-if="selectedBlog.HasPrimaryLink" class="bg-blue-600 text-white px-4 py-2 rounded">
            Primary action
          </button>
          <button v-if="selectedBlog.HasSecondaryLink" class="border border-blue-600 text-blue-600 px-4 py-2 rounded">
            Secondary action
          </button>
        </div>
      </div>

      <div class="md:w-1/2">
        <img :src="selectedBlog.ImageUrl" :alt="selectedBlog.ImageAltText" :class="selectedBlog.ImageClass"
          class="w-full h-auto rounded-lg shadow-md">
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply font-bold text-black;
}
</style>