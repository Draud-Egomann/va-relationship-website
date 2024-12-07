<script lang="ts" setup>
import { mainTextChat, sectionsChat } from '~/composables/text/ai-chatbot';
const heroBanner = {
    title: "Seit 9 Jahren tot, durch AI jedoch täglich am schreiben",
    subTitle: "Die neue Intimität",
    isBigView: true,
    paragraphs: [
        "Überwinden wir mit KI den Tod?",
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