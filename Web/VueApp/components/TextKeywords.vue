<script setup lang="ts">
defineProps<{
  title: string,
  text: string,
  texts: {
    text: string,
    specialText?: string,
    keyword: string,
    image?: ImageBaseItem,
  }[]
  hasKeyword: boolean,
}>()
</script>

<template>
  <div class="py-20">
    <div class="max-w-4xl mx-auto text-center p-8 md:p-0 mb-0 md:mb-12">
      <Heading :heading-type="2" :title="title" :text="text" />
    </div>

    <div class="max-w-6xl mx-auto space-y-8">
      <div v-for="(item, index) in texts" :key="index" class="flex flex-wrap justify-between items-center">

        <p
          class="text-neutral2 dark:text-darkNeutral2 text-base md:text-lg mb-4 w-full md:w-3/4 px-8 md:p-0 text-center md:text-left mx-auto">
          {{ item.text }}
          <span v-if="!stringHelper.IsNullOrEmpty(item.specialText ?? '')" id="platin"
            class="text-neutral2 dark:text-darkNeutral2 text-base md:text-lg inline-block border-l-4 border-red-600 pl-2 -ml-3 italic my-4">
            {{ item.specialText }}
          </span>
        </p>

        <span v-if="hasKeyword && item.image == null"
          class="font-extrabold text-xl mb-0 md:mb-8 w-full lg:w-1/4 text-center lg:text-right text-shadow-outline shadow-special1 dark:shadow-darkSpecial1Dark">
          {{ item.keyword }}
        </span>
        <span v-else class="w-full md:w-auto mx-auto">
          <Image :src="item.image.ImageUrl ?? '~/assets/images/placeholder.jpg'" :alt="item.image.ImageAltText"
            :class="item.image.ImageClass" class="w-4/5 md:w-60 mx-auto" />
        </span>

      </div>
    </div>
  </div>
</template>