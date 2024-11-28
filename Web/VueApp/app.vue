<script setup lang="ts">
const blogEntries = DataProvider.GetBlogEntries();
const heading = DataProvider.GetMainHeading();
const cards = DataProvider.GetCards();
</script>

<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet">

    <div class="bg-neutral1 dark:bg-darkNeutral1">
      <ToggleDarkMode />
      <HeroBanner :heading-type="1" :title="'Heading 1'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'" />

      <Main1 :title="heading[0]" :text="heading[1]" :cards="cards" />
      <Main2 :blogs="blogEntries" />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
      <Main7 />
      <Main6 :reverse="true" />
      <Main8 />
      <Main9 />
      <Main10 :has-keyword="true" />
      <Main10 :has-keyword="false" />
    </div>
  </div>
</template>
