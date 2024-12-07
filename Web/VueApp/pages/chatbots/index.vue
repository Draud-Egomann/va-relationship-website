<script lang="ts" setup>
import { mainTextChat, sectionsChat } from '~/composables/text/ai-chatbot';
const heroBanner = {
  title: "Allein gelassen von der Welt, findet er Trost in einem Chatbot",
  subTitle: "Die neue Intimität",
  isBigView: true,
  paragraphs: [
    "Trost in der digitalen Leere, verführt von der Illusion einer anderen Realität",
  ],
}

</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView"
    :hasButton="false" :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />

  <Texts :title="'Allein gelassen von der Welt, findet er Trost in einem Chatbot'" :text=mainTextChat
    :sections=sectionsChat />
  <!-- Einsam, einsamer, ein Chatbot -->
  <!-- Allein gelassen von der Welt, findet er Trost in einem Chatbot -->
  <!-- Ein Herz und Emotionen in Code und Metall? -->
  <!-- Ein Selbstversuch: Replika -->
  <!-- KI streitet mit Nutzer um ihre Echtheit -->
</template>