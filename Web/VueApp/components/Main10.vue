<script setup lang="ts">
defineProps<{
  hasKeyword: boolean,
}>()

const texts = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. This is the first text explaining something important.",
    keyword: "Insight",
    image: "https://picsum.photos/seed/insight/500",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Here we discuss another key point in this section.",
    keyword: "Focus",
    image: "https://picsum.photos/seed/focus/500",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. This part elaborates on an additional topic of interest.",
    keyword: "Perspective",
    image: "https://picsum.photos/seed/perspective/500",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. An overview of another critical aspect is provided here.",
    keyword: "Vision",
    image: "https://picsum.photos/seed/vision/500",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Finally, we summarize a concluding thought here.",
    keyword: "Summary",
    image: "https://picsum.photos/seed/summary/500",
  },
];
</script>

<template>
  <div class="py-20">
    <div class="max-w-4xl mx-auto text-center p-8 md:p-0 mb-12">
      <Heading :heading-type="2" :title="'Section Title'"
        :text="'Here is some introductory text for the section, giving an overview of the content below.'" />
    </div>

    <div class="max-w-6xl mx-auto space-y-8">
      <div v-for="(item, index) in texts" :key="index" class="flex flex-wrap justify-between items-center">

        <p class="text-neutral2 dark:text-darkNeutral2 text-lg w-full md:w-3/4 p-8 md:p-0 text-center md:text-left">
          {{ item.text }}
        </p>

        <span v-if="hasKeyword"
          class="font-extrabold text-xl w-full md:w-1/4 text-center md:text-right text-shadow-outline shadow-special1 dark:shadow-darkSpecial1Dark">
          {{ item.keyword }}
        </span>
        <span v-else class="w-full md:w-auto">
          <img src="https://picsum.photos/seed/bread/500" alt="asdaslhdl" class="w-52 h-32 mx-auto" draggable="false" />
        </span>

      </div>
    </div>
  </div>
</template>