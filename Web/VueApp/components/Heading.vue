<script setup lang="ts">
const props = defineProps<{
  headingType: number,
  title: string,
  text: string,
  textReducedSize?: boolean
}>()

const formattedText = computed(() => {
  const sentences = props.text.split('.');
  let result = '';

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();
    if (sentence) {
      result += sentence + '.';

      if ((i + 1) % 3 === 0 && i < sentences.length - 1) {
        result += '<br/><br/>';
      }
    }
  }
  return result;
});

onMounted(() => {
  const headingType = Number(props.headingType);

  if (isNaN(headingType) || headingType > 6 || headingType < 1) {
    console.error('Invalid heading type:', props.headingType);
  }
});
</script>

<template>
  <h1 v-if="props.headingType == 1" class="text-special1 dark:text-darkSpecial1Dark my-4 md:my-8">
    {{ title }}
  </h1>
  <h2 v-if="props.headingType == 2" class="text-primary2 dark:text-darkPrimary1Dark my-2 md:my-6">
    {{ title }}
  </h2>
  <h3 v-if="props.headingType == 3" class="text-neutral2 dark:text-darkNeutral2 my-0 md:my-4">
    {{ title }}
  </h3>
  <h4 v-if="props.headingType == 4" class="text-neutral2 dark:text-darkNeutral2 my-0 md:my-4">
    {{ title }}
  </h4>
  <h5 v-if="props.headingType == 5" class="text-neutral2 dark:text-darkNeutral2 my-0 md:my-2">
    {{ title }}
  </h5>
  <h6 v-if="props.headingType == 6" class="text-neutral2 dark:text-darkNeutral2 my-0">
    {{ title }}
  </h6>
  <p class="text-neutral2 dark:text-gray1" :class="{ 'w-full md:w-3/4 mx-auto': textReducedSize }"
    v-html="formattedText"></p>
</template>