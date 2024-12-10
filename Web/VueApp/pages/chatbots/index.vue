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
  <div class="max-w-6xl mx-auto p-4 md:p-8">
    <div class="text-center mb-8">
      <Heading :headingType="2" :title="'Unsterblich durch KI'"
        :text="'Roman Mazurenko schreibt täglich, dabei ist er seit 9 Jahren tot'" />
    </div>

    <div class="flex flex-col md:flex-row items-center justify-center space-x-6">
      <img src="/roman.png" alt="Roman Mazurenko" class="w-72 h-auto object-cover rounded-md mx-auto mb-4 md:mb-0" />

      <div class="!m-0 md:max-w-lg">
        <p class="text-neutral2 dark:text-darkNeutral2 text-center">
          Roman Mazurenko, ein junger Mann aus Russland, starb 2015 bei einem Unfall. Seine beste
          Freundin Eugenia Kuyda, tief getroffen vom Verlust, suchte nach einem Weg, weiterhin mit ihm
          in Kontakt zu bleiben. Sie sammelte alte Nachrichten und Texte von Roman und schuf mithilfe von
          KI und maschinellem Lernen einen digitalen Gesprächspartner, der seine Sprache, seinen Humor und
          seine Ausdrucksweise nachahmte. So entstand die erste Version eines Bots, der im Wesentlichen darauf
          ausgelegt war, ihre Erinnerung an Roman wachzuhalten.
        </p>
        <p class="mt-4 text-neutral2 dark:text-darkNeutral2 text-center">
          Kuyda fand dabei nicht nur Trost, sondern erkannte auch das Potenzial einer App, die Menschen als
          emotionaler Begleiter dienen könnte. Replika, der digitale „Freund“ für jedermann, war geboren. Die
          App wurde 2017 veröffentlicht und hat seitdem Millionen von Nutzern gewonnen.
        </p>
      </div>
    </div>
  </div>
  <!-- Ein Selbstversuch: Replika -->
  <!-- KI streitet mit Nutzer um ihre Echtheit -->
</template>