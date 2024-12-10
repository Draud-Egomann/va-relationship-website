<script lang="ts" setup>
import { mainTextWorld, sectionsWorld, gptDoctorItems } from '~/composables/text/ai-world';
const heroBanner = {
  title: "Zwischen Welten",
  subTitle: "Die neue Intimität",
  isBigView: false,
  paragraphs: [
    "Technologie und Alltag verschmelzen zunehmend zu einer Einheit, die unseren Lebensstil prägt.",
  ],
}

const surveyAnswers: {
  text: string;
  specialText?: string;
  keyword: string;
  image: ImageBaseItem;
}[] = [
    {
      text: "KI wird vor allem für Arbeit, Nachforschungen und überraschend häufig aus Interesse oder als Hobby genutzt. Das deutet darauf hin, dass KI nicht nur ein Werkzeug aus Zwang, sondern aus echtem Interesse verwendet wird.",
      keyword: "",
      image: new ImageBaseItem(
        "survey1.jpg",
        "",
      ),
    },
    {
      text: "ChatGPT geniesst noch die grösste Beliebtheit, gefolgt von Bing AI. Dies stimmt mit unseer Reherche und unseren persönlichen Präferenzen bein.",
      keyword: "KI-Beliebtheit",
      image: new ImageBaseItem(
        "survey2.jpg",
        "",
      ),
    },
    {
      text: "Eine deutliche Mehrheit ist begeistert von KI und befürwortet diese. Nur ganz wenige Stimmen sind gegen KI oder fürchten den raschen Anstieg.Dies wundert uns ein bisschen, da wir mehr Widerstand erwrtet haben.",
      keyword: "KI-Akzeptanz",
      image: new ImageBaseItem(
        "survey3.jpg",
        "",
      ),
    },
    {
      text: "Die meisten Vorteile werden bei der Umformulierung von komplexen Aufgaben und bei der individuellen Nachhilfe gesehen.Dies stimmt auch mit unserer eigenen Erfahrung überein.",
      keyword: "KI-Vorteile",
      image: new ImageBaseItem(
        "survey4.jpg",
        "",
      ),
    },
    {
      text: "Die Nachteile werden ausgewogen bewertet, oft wird das Kopieren von Lösungen ohne Verständnis kritisch gesehen.",
      keyword: "KI-Nachteile",
      image: new ImageBaseItem(
        "survey5.jpg",
        "",
      ),
    },
    {
      text: "Regulationen für KI werden nicht gewünscht, aber es sollte als Quelle angegeben werden. Dies stimmt mit unserer Meinung überein und an vielen Schulen ist dies bereits sogar Pflicht.",
      keyword: "KI-Regulation",
      image: new ImageBaseItem(
        "survey6.jpg",
        "",
      ),
    },
    {
      text: "Repetitive Berufe gelten als besonders bedroht durch KI, überraschend gefolgt von kreativen Berufen.",
      keyword: "KI und Berufe",
      image: new ImageBaseItem(
        "survey7.jpg",
        "",
      ),
    },
    {
      text: "Bei KI-generierter Kunst gibt es geteilte Meinungen, mit viel Sympathie für Künstler, da KI häufiger genutzt wird, um Kosten zu sparen.",
      keyword: "KI und Kunst",
      image: new ImageBaseItem(
        "survey8.jpg",
        "",
      ),
    },
    {
      text: "Die Ergebnisse zeigen, dass die Mehrheit der Antwortenden aus dem Informatikbereich kommt. Das überrascht wenig, da ein Grossteil der BBZW- Klassen Informatiker umfasst. Klar, wer könnte zur Künstlichen Intelligenz mehr sagen als diejenigen, die täglich mit der Technik arbeiten. Auch freut uns, dass unsere Umfrage sogar ausserhalb unserer Kreise gesehen wurde - etwa im Rechtswesen.",
      specialText: "Besonders amüsant finden wir die Antwort des Minecraft Experten und Platin Spielers in Legaue of Legendes. Auf diese Perspektive kann man ja kaum verzichten. Diese Meinung schätzen wir ganz besonders.",
      keyword: "Teilnehmerprofile",
      image: new ImageBaseItem(
        "survey9.jpg",
        "",
      ),
    }
  ]

const dText = `
Daisy ist eine charmate ältere Dame, welche öfters bei Gesprächen mit "Supportern" den faden verliert. Die Idee für Daisy kam dem britischen Anbieter O2, um Telefonbetrügern ihre Zeit zu steheln und echte Opfer zu schützen. Ihre Persönlichkeit ist perfekt auf das Klischee einer gutgläubigen, freundlichen Seniorin zugeschnitten, die ausgiebig von Strickprojekten und Familiengeschichten erzählt. Daisy kann beliebig viele Betrüger gleichzeitig hinhalten, ohne jemals müde zu werden. Mit Rückfragen und absichtlichem Missverstehen dehnt sie die Gespräche oft über 40 Minuten aus, bis die Betrüger frustriert auflegen.`;

const poisonAiText: {
  text: string;
  specialText?: string;
  keyword: string;
  image?: ImageBaseItem;
}[] = [
    {
      "text": "Nightshade ist ein Tool, das Künstlern ermöglicht, ihre Werke vor ungefragtem KI-Training zu schützen. Es verändert Bilder auf pixelgenauer Ebene, sodass KI-Systeme die Inhalte fehlerhaft interpretieren, während sie für die Menschen (beinahe) unverändert bleiben. So könnten ein Hund als Katze oder ein Auto als Kuh interpretiert werden.",
      "keyword": "KI-Schutz"
    },
    {
      "text": "KI-Modelle ignorieren Opt-out-Listen, was Rechteinhaber daran hindert, ihre Werke vor ungefragtem Training zu schützen. Nightshade erhöht die Kosten für unerlaubtes Datentraining, indem es Modelle dazu bringt, abweichende Verhaltensweisen zu lernen.",
      "keyword": "Urheberrecht"
    },
    {
      "text": "Nightshade funktioniert ähnlich wie seine Vorversion Glaze, ist aber im Gegensatz offensiv. Gezielt werden generative Modelle sabotiert.",
      "keyword": "Offensive Schutz"
    },
    {
      "text": "Die Effekte von Nightshade bleiben selbst bei Bildbearbeitungen wie Zuschneiden, Komprimieren oder Rauschanpassungen erhalten.",
      "keyword": "Robustheit"
    },
    {
      "text": "Nightshade wird zusammen mit Glaze getestet und könnte in Zukunft als Add-on für Webglaze veröffentlicht werden. Während Glaze Schutz vor Stilkopien bietet, manipuliert Nightshade gezielt KI-Trainingsdaten.",
      "keyword": "Tool-Integration"
    }
  ]

</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView"
    :hasButton="false" :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />

  <Texts :title="'Zwischen Welten, eine neue Zukunft'" :text=mainTextWorld :sections=sectionsWorld />

  <Blockquote :author="''">
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
    :texts="surveyAnswers" :has-keyword="false" :textSplitCount="2" />

  <!-- Daisy KI Oma -->
  <div class="max-w-6xl mx-auto p-4 md:p-8">
    <div class="py-24 text-center">
      <Heading :heading-type="2" :title="'KI-Oma treibt Telefonnbetrüger in den Wahnsinn'" :text="dText"
        :text-reduced-size="true" />
    </div>

    <!-- video container -->
    <div class="flex justify-center gap-8">
      <iframe src="https://www.youtube.com/embed/RV_SdCfZ-0s" class="w-full h-[80vh] object-cover mx-auto"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>

  <!-- Ethisches Dilemma -->
  <!-- «Her» ein Film der die Zukunft vorausgesagt hat -->
  <!-- KIs «vergiften» -->
  <div id="nightshade">
    <TextKeywords :title="'KIs «vergiften»'"
      :text="'Ein Tool, entwicklet von Forschern an der Universität von Chicago, dass Bilder auf pixelgenauer Ebene für die «Augen» einer KI «verhunzt».'"
      :texts="poisonAiText" :has-keyword="true" class="py-0" />

    <div class="max-w-6xl mx-auto space-y-8">
      <div class="flex flex-wrap justify-between items-center">

        <p
          class="text-neutral2 dark:text-darkNeutral2 text-lg mb-4 w-full md:w-3/4 p-8 md:p-0 text-center md:text-left mx-auto">
          Das bild ist ein Beispiel, was passiert, wenn KI-Modelle vergiftet werden.
        </p>

        <span class="w-full md:w-auto mx-auto">
          <Image src="/ai-poison.jpg" alt="" class="w-4/5 md:w-60 mx-auto" />
        </span>

      </div>
    </div>

  </div>
</template>