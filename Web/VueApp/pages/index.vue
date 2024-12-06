<script lang="ts" setup>
const heroBanner = {
  title: "Welcome to the Hero Banner",
  subTitle: "A Vue.js Component Example",
  isBigView: true,
  paragraphs: [
    "This is the first paragraph of text.",
    "Here is another paragraph for demonstration purposes.",
  ],
}
</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView" :hasButton="false"
    :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />
</template>