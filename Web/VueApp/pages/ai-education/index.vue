<script lang="ts" setup>
import { mainTextEd, sectionsEd } from '~/composables/text/ai-education';
const heroBanner = {
  title: "KI in der Bildung: Ein Segen oder der Untergang?",
  subTitle: "Die neue Intimität",
  isBigView: true,
  paragraphs: [
    "Ist unsere Bildung gefährdet?",
  ],
}

</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView"
    :hasButton="false" :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />

  <Texts :title="'KI in der Bildung: Ein Segen oder der Untergang?'" :text=mainTextEd :sections=sectionsEd />
  <!-- KI in der Bildung: Ein Segen oder der Untergang? -->
  <!-- Die KI von Heute -->
  <!-- KI vor Gericht -->
  <!-- KI vor Gericht Video -->
  <!-- Angebote und Seminare -->
  <!-- Die KI von Heute -->
</template>