<script setup lang="ts">
const mockData = {
  title: "Welcome to the Hero Banner",
  subTitle: "A Vue.js Component Example",
  isBigView: true,
  paragraphs: [
    "This is the first paragraph of text.",
    "Here is another paragraph for demonstration purposes.",
  ],
}

const blogEntries = DataProvider.GetBlogEntries();
const videoBanner = DataProvider.GetVideoBanner();
const heading = DataProvider.GetMainHeading();
const cards = DataProvider.GetCards();
const accordions = DataProvider.GetAccordions();
const statCards = DataProvider.GetStatCards();
const horizontalCard = DataProvider.GetHorizontalCard();
const mainCards = DataProvider.GetMainCards();
const audioPlayers = DataProvider.GetAudioPlayers();
const slides = DataProvider.GetSlides();
const tableData = DataProvider.GetTableData();
</script>

<template>
  <HeroBanner :title="mockData.title" :subTitle="mockData.subTitle" :isBigView="mockData.isBigView" :hasButton="false"
    :buttonText="null" :paragraphs="mockData.paragraphs" @buttonClickEvent="() => { }" />
  <HeroHeading2 :heading-type="1" :title="'Heading 1'"
    :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'" />

  <Cards :title="heading[0]" :text="heading[1]" :cards="cards" />
  <BlogTimeline :blogs="blogEntries" />
  <VideoBanner :videoUrl="videoBanner.videoUrl" :title="videoBanner.title" :description="videoBanner.description"
    :linkText="videoBanner.linkText" :linkUrl="videoBanner.linkUrl" />
  <Main4 />
  <Main5 />
  <Main6 />
  <Main7 />
  <Main6 :reverse="true" />
  <Main8 />
  <Main9 />
  <Main10 :has-keyword="true" />
  <Main10 :has-keyword="false" />
  <Accordions :title="'Accordions'" :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
    :accordions="accordions" />
  <Blockquote :author="'tom'">
    <p class="font-bold text-neutral2 dark:text-darkNeutral2">
      reiciendis. Quasi, nisi. Laudantium necessitatibus recusandae iure rem accusantium possimus minima
      explicabo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, delectus ullam illo corporis dolores
      Eveniet quo obcaecati doloribus?
    </p>
  </Blockquote>
  <StatCards :title="'Stat Cards'" :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
    :StatCards="statCards" />
  <HorizontalCard :horizontalCard="horizontalCard" />
  <MainCards :title="'Main Cards'" :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'"
    :cards="mainCards" />
  <AudioPlayers :audioPlayers="audioPlayers" />
  <Slides :slides="slides" />
  <DataTable :table_data="tableData" />
  <BentoBox />
</template>