<script lang="ts" setup>
import { mainTextWorld, sectionsWorld, gptDoctorItems } from '~/composables/text/ai-world';
const heroBanner = {
  title: "Zwischen Welten",
  subTitle: "Die neue Intimität",
  isBigView: true,
  paragraphs: [
    "Technologie und Alltag verschmelzen zunehmend zu einer Einheit, die unseren Lebensstil prägt.",
  ],
}

const surveyAnswers: {
  text: string;
  keyword: string;
  image: ImageBaseItem;
}[] = [
    {
    text: "KI wird vor allem für Arbeit, Nachforschungen und überraschend häufig aus Interesse oder als Hobby genutzt. Das deutet darauf hin, dass KI nicht nur ein Werkzeug aus Zwang, sondern aus echtem Interesse verwendet wird.",
      keyword: "",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "ChatGPT geniesst noch die grösste Beliebtheit, gefolgt von Bing AI. Dies stimmt mit unseer Reherche und unseren persönlichen Präferenzen bein.",
      keyword: "KI-Beliebtheit",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "Eine deutliche Mehrheit ist begeistert von KI und befürwortet diese. Nur ganz wenige Stimmen sind gegen KI oder fürchten den raschen Anstieg.Dies wundert uns ein bisschen, da wir mehr Widerstand erwrtet haben.",
      keyword: "KI-Akzeptanz",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "Die meisten Vorteile werden bei der Umformulierung von komplexen Aufgaben und bei der individuellen Nachhilfe gesehen.Dies stimmt auch mit unserer eigenen Erfahrung überein.",
      keyword: "KI-Vorteile",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "Die Nachteile werden ausgewogen bewertet, oft wird das Kopieren von Lösungen ohne Verständnis kritisch gesehen.",
      keyword: "KI-Nachteile",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "Regulationen für KI werden nicht gewünscht, aber es sollte als Quelle angegeben werden. Dies stimmt mit unserer Meinung überein und an vielen Schulen ist dies bereits sogar Pflicht.",
      keyword: "KI-Regulation",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "Repetitive Berufe gelten als besonders bedroht durch KI, überraschend gefolgt von kreativen Berufen.",
      keyword: "KI und Berufe",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "Bei KI-generierter Kunst gibt es geteilte Meinungen, mit viel Sympathie für Künstler, da KI häufiger genutzt wird, um Kosten zu sparen.",
      keyword: "KI und Kunst",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    },
    {
      text: "Die Ergebnisse zeigen, dass die Mehrheit der Antwortenden aus dem Informatikbereich kommt.Das überrascht wenig, da ein Grossteil der BBZW- Klassen Informatiker umfasst.Klar, wer könnte zur Künstlichen Intelligenz mehr sagen als diejenigen, die täglich mit der Technik arbeiten.Auch freut uns, dass unsere Umfrage sogar ausserhalb unserer Kreise gesehen wurde - etwa im Rechtswesen. Besonders amüsant finden wir die Antwort des Minecraft - Experten und Platin Spielers in League of Legends.Die Meinung dieses Teilnehmers schätzen wir ganz besonders.",
      keyword: "Teilnehmerprofile",
      image: new ImageBaseItem(
        "https://picsum.photos/200/400",
        "Generisches Bild",
      ),
    }
  ]
</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView"
    :hasButton="false" :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />

  <Texts :title="'Zwischen Welten, eine neue Zukunft'" :text=mainTextWorld :sections=sectionsWorld />

  <!--  -->
  <Blockquote :author="'Eigenes Zitat'">
    <p class="font-bold text-neutral2 dark:text-darkNeutral2">
      Eine KI kann berüchtigt falsch liegen, weshalb man ihr bei medizinischen
      Fragen eher mit Vorsicht begegnen sollte, oder?
    </p>
  </Blockquote>

  <!-- ChatGPT übertrifft Ärzte? -->
  <MainSection :items="gptDoctorItems" :reverse="false" />
  <!-- Umfragen -->
  <TextKeywords :title="'Umfragen'"
    :text="'Wir haben eine Umfrage erstellt, um Meinungen und Einsichten zu unseren Thesen und Zielen zu sammeln. Dabei teilen wir die Umfrage auf Plattformen wie Subreddits, LinkedIn und an Schulklassen, um möglichst vielfältige Rückmeldungen zu erhalten. Von den 21 Fragen des Formulars haben wir ein Drittel ausgewählt und werten diese entsprechend unseren Thesen aus.'"
    :texts="surveyAnswers" :has-keyword="false" />
  <!-- Daisy KI Oma -->
  <!-- Ethisches Dilemma -->
  <!-- «Her» ein Film der die Zukunft vorausgesagt hat -->
  <!-- KIs «vergiften» -->
</template>