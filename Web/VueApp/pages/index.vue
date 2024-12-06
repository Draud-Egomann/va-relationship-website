<script lang="ts" setup>
const heroBanner = {
  title: "Wenn Künstliche Intelligenz Lehrer, Politiker und Partner wird",
  subTitle: "Die neue Intimität",
  isBigView: true,
  paragraphs: [
    "Die Verschmelzung von Technologie und menschlichem Alltag öffnet Türen zu ungeahnten Möglichkeiten.",
  ],
}
</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView"
    :hasButton="false" :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />
</template>