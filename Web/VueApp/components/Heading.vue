<script setup lang="ts">
const props = defineProps<{
  headingType: number,
  title: string,
  text: string,
  textReducedSize?: boolean
}>()

onMounted(() => {
  const headingType = Number(props.headingType);

  if (isNaN(headingType) || headingType > 6 || headingType < 1) {
    console.error('Invalid heading type:', props.headingType);
  }
})
</script>

<template>
  <h1 v-if="props.headingType == 1" class="text-special1 dark:text-darkSpecial1Dark my-8">
    {{ title }}
  </h1>
  <h2 v-if="props.headingType == 2" class="text-primary2 dark:text-darkPrimary1Dark my-6">
    {{ title }}
  </h2>
  <h3 v-if="props.headingType == 3" class="text-neutral2 dark:text-darkNeutral2 my-4">
    {{ title }}
  </h3>
  <h4 v-if="props.headingType == 4" class="text-neutral2 dark:text-darkNeutral2 my-4">
    {{ title }}
  </h4>
  <h5 v-if="props.headingType == 5" class="text-neutral2 dark:text-darkNeutral2 my-2">
    {{ title }}
  </h5>
  <h6 v-if="props.headingType == 6" class="text-neutral2 dark:text-darkNeutral2 my-0">
    {{ title }}
  </h6>
  <p class="text-neutral2 dark:text-gray1" :class="{ 'w-3/4 mx-auto': textReducedSize }">
    {{ text }}
  </p>
</template>