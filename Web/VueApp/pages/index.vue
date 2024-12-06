<script lang="ts" setup>
const heroBanner = {
  title: "Wenn Künstliche Intelligenz Lehrer, Politiker und Partner wird",
  subTitle: "Die neue Intimität",
  isBigView: true,
  paragraphs: [
    "Die Verschmelzung von Technologie und menschlichem Alltag öffnet Türen zu ungeahnten Möglichkeiten.",
  ],
}

const goalCards = [
  new Card(
    "Identität/Sozialisation",
    "Wie beeinflusst Künstliche Intelligenz unser Denken und unsere Beziehungen?",
    "https://fastly.picsum.photos/id/1027/300/300.jpg?hmac=PblN9CQ5na5QsjLMcsx_O1O-nlix2aUNWp39M9WpMTI",
    "",
  ),
  new Card(
    "Technologie",
    "Wie weit ist KI bereits fortgeschritten?",
    "/technology.jpg",
    "",
  ),
  new Card(
    "Ethik",
    "Ist es ethisch vertretbar, eine KI über Menschen richten zu lassen?",
    "/ai_judge.jpg",
    "",
  ),
  new Card(
    "Recht",
    "Ist KI mit unserem Rechtssystem konform?",
    "/hammer.jpg",
    "",
  ),
  new Card(
    "Identität/Sozialisation",
    "Wie verändert Künstliche Intelligenz das menschliche Denken?",
    "https://fastly.picsum.photos/id/442/300/300.jpg?hmac=10-uBtKviZG5wK4me1sFtsdY0XqHNDDy1puI09aFbBU",
    "",
  ),
  new Card(
    "Wirtschaft",
    "Bedroht KI den Arbeitsmarkt?",
    "https://cdn.pixabay.com/photo/2023/07/08/07/25/ai-generated-8113893_960_720.jpg",
    "",
  ),
  new Card(
    "Identität/Sozialisation/Ethik",
    "Welche sozialen und ethischen Herausforderungen bringt der Einsatz von KI mit sich?",
    "https://picsum.photos/id/3/300",
    "",
  ),
  new Card(
    "Identität/Sozialisation",
    "Wie verändert sich das menschliche Verhalten durch die Integration von KI in den Alltag?",
    "/social.jpg",
    "",
  ),
]

const mainCards = [
  new MainCard(
    "/ai-world",
    "Grenzen zwischen virtueller & realer Welt",
    "Zwischen Welten",
    "Virtuelle Realität und KI schaffen neue Dimensionen. Allgemeine Unterthemen und Fakten über KI sind hier.",
    "https://picsum.photos/id/679/800/500",
    "Ein generisches Bild",
  ),
  new MainCard(
    "ai-education/",
    "Die Zukunft des Lernens",
    "KI in der Bildung",
    "Wie KI unsere Bildungssysteme revolutioniert und die Art und Weise, wie wir lernen, verändert.",
    "https://picsum.photos/id/891/800/500",
    "Ein generisches Bild",
  ),
  new MainCard(
    "chatbots/",
    "Intimität und Beziehungen mit KI",
    "Bindungen mit KI",
    "Was passiert, wenn künstliche Intelligenz zu einem wichtigen Teil unserer Beziehungen wird?",
    "https://picsum.photos/id/520/800/500",
    "Ein generisches Bild",
  ),
]
</script>

<template>
  <HeroBanner :title="heroBanner.title" :subTitle="heroBanner.subTitle" :isBigView="heroBanner.isBigView"
    :hasButton="false" :buttonText="null" :paragraphs="heroBanner.paragraphs" @buttonClickEvent="() => { }" />

  <Texts :title="'Einleitung'"
    :text="'Künstliche Intelligenz (KI) gewinnt zunehmend an Relevanz und beeinflusst bereits viele Bereiche unseres Lebens. In dieser Arbeit möchten wir untersuchen, wie KI unser Denken, unsere Beziehungen und die Art und Weise, wie wir lernen, verändert hat und noch weiter verändern wird.'"
    :sections="[
      {
        title: 'Anlass',
        text: 'Es ist fast unmöglich in der digitalen Welt nicht mehr auf KI zu stossen. Fast jedes grosse Tech-Unternehmen entwickelt eigene KI-Systeme und auch für normale Nutzer wird dies immer mehr an Relevant gewinnen. Somit wollen wir unsere Leser auf das Kommende vorbereiten und über die potenziellen Risiken im Einsatz mit KI informieren.'
      },
      {
        title: 'Warum haben wir dieses Thema gewählt?',
        text: 'Künstliche Intelligenz ist für uns etwas sehr Spannendes und hatte einen starken Einfluss auf unsere Ausbildung. Zwar hört man öfters von neuen Durchbrüchen und Technologien, jedoch hat die KI viele Bereiche gezwungen umzudenken, wie wir es schon an Universitäten sehen, an denen Masterarbeiten auf KI-Text geprüft werden müssen. Dies macht KI für uns wahrlich aussergewöhnlich.'
      },
      {
        title: 'Wir greifen oft zur KI',
        text: 'Sei es in der Berufsschule oder auf der Arbeit. Dabei kommen wir schnell zu Resultaten, ohne dieses wirklich zu verstehen. Dies bemerken wir auch in unserem Umfeld. Dadurch haben wir auch einen hohen Selbstbezug zu diesem Thema. KI ist ein nützliches Tool und findet immer mehr Verwendung, jedoch möchten wir Risiken früh erkennen und dabei lernen, wie wir uns auf die Zukunft vorbereiten können.'
      },
    ]" />

  <Cards :title="'Unsere Fragen & Ziele'"
    :text="'In unserem Projekt möchten wir untersuchen, wie KI unser Denken, unser soziales Verhalten und die Gesellschaft im Allgemeinen beeinflusst.'"
    :cards="goalCards" />

  <StickyCards title="Unsere Thesen zur KI"
    text="Wir betrachten die Auswirkungen der zunehmenden Abhängigkeit von KI auf verschiedene Lebensbereiche." :cards="[
      {
        title: 'Übermässige Abhängigkeit von KI',
        text: 'Die zunehmende Abhängigkeit von KI kann dazu führen, dass Menschen ihre Fähigkeit verlieren, Probleme eigenständig zu lösen.'
      },
      {
        title: 'Gefährdung der Bildung',
        text: 'Besonders für jüngere Generationen besteht die Gefahr, dass sie ohne Eigendenken aufwachsen und wichtige Problemlösungsfähigkeiten nicht entwickeln.'
      },
      {
        title: 'Auswirkungen auf Beziehungen',
        text: 'Romantische Beziehungen mit KI könnten menschliche Beziehungen zunehmend ersetzen und die soziale Isolation verstärken.'
      },
      {
        title: 'Isolation als neue Herausforderung',
        text: 'Die steigende Isolation durch KI-basierte Unterstützung könnte eine neue Risikogruppe in der Gesellschaft hervorbringen.'
      }
    ]" />

  <div class="w-3/4 mx-auto border border-gray1/20 mt-8"></div>

  <div class="max-w-6xl mx-auto p-8">
    <div class="text-center mb-8">
      <h2 class="text-special1 dark:text-darkSpecial1Dark my-6">
        Dank
      </h2>

      <p class="text-neutral2 dark:text-gray1" :class="{ 'w-3/4 mx-auto': true }">
        Wir möchten uns bei unserer Expertenperson <b>Herrn Grüter</b> bedanken, dass er diese VA begleitet und uns bei
        sämtlichen Fragen unterstützt hat.
      </p>
    </div>
  </div>

  <MainCards :title="'Unsere Themengebiete'"
    :text="'Im Rahmen unserer Arbeit haben wir uns mit verschiedenen Themengebieten auseinandergesetzt. Diese haben wir in drei Kategorien unterteilt.'"
    :cards="mainCards" />
</template>