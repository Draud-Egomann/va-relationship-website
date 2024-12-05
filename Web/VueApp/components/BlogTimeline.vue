<script setup lang="ts">
const props = defineProps<{
  blogs: BlogEntry[]
}>()

let selectedBlog = ref(props.blogs[0])

function setActiveTimeline(blog: BlogEntry) {
  selectedBlog.value = blog
}

function prevTimeline() {
  const currentIndex = props.blogs.findIndex(blog => blog.Date === selectedBlog.value.Date)
  const prevIndex = currentIndex - 1
  if (prevIndex >= 0) {
    selectedBlog.value = props.blogs[prevIndex]
  }
}

function nextTimeline() {
  const currentIndex = props.blogs.findIndex(blog => blog.Date === selectedBlog.value.Date)
  const nextIndex = currentIndex + 1
  if (nextIndex < props.blogs.length) {
    selectedBlog.value = props.blogs[nextIndex]
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <div class="flex items-center justify-between mb-8">
      <button @click="prevTimeline()" class="text-gray1 hover:text-gray2 dark:hover:text-neutral1">
        <fa-icon icon="arrow-left" />
      </button>

      <div class="flex items-center space-x-4">
        <button v-for="blog in props.blogs" :key="blog.Date" :class="{ 'active': selectedBlog.Date == blog.Date }"
          @click="setActiveTimeline(blog)" class="text-gray1 hover:text-black dark:hover:text-neutral1">
          {{ blog.FormattedDate }}
        </button>
      </div>

      <button @click="nextTimeline()" class="text-gray1 hover:text-gray2 dark:hover:text-neutral1">
        <fa-icon icon="arrow-right" />
      </button>
    </div>

    <div class="flex flex-col md:flex-row items-start md:items-center gap-8">
      <div class="md:w-1/2">
        <p class="text-gray2 dark:text-gray1 mb-2">
          {{ selectedBlog.FormattedDate }}
        </p>
        <Heading :headingType="4" :title="selectedBlog.Title" :text="selectedBlog.Text" />

        <div class="space-x-4">
          <button v-if="selectedBlog.HasPrimaryLink"
            class="bg-primary1 dark:bg-darkPrimary1Dark text-neutral1 px-4 py-2 rounded">
            Primary action
          </button>
          <button v-if="selectedBlog.HasSecondaryLink"
            class="border border-primary2 dark:border-darkPrimary2Dark text-primary2 dark:text-darkNeutral2 px-4 py-2 rounded">
            Secondary action
          </button>
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <img :src="selectedBlog.ImageUrl" :alt="selectedBlog.ImageAltText" :class="selectedBlog.ImageClass"
          class="w-full h-auto rounded-lg shadow-md">
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply font-bold text-black dark:text-white;
}
</style>