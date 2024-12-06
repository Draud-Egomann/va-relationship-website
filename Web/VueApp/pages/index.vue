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
</template>