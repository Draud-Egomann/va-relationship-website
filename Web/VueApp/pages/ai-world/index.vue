<script lang="ts" setup>
const heroBanner = {
  title: "Zwischen Welten",
  subTitle: "Die neue Intimität",
  isBigView: false,
  paragraphs: [
    "Technologie und Alltag verschmelzen zunehmend zu einer Einheit, die unseren Lebensstil prägt.",
  ],
}
</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView"
    :hasButton="false" :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />


  <!-- ChatGPT übertrifft Ärzte? -->
  <!-- Umfragen -->
  <!-- Daisy KI Oma -->
  <!-- Ethisches Dilemma -->
  <!-- «Her» ein Film der die Zukunft vorausgesagt hat -->
  <!-- KIs «vergiften» -->
</template>