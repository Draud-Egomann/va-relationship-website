<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subTitle: string | null;
  isBigView: boolean;
  hasButton: boolean;
  buttonText: string | null;
  paragraphs: string[];
}>();
const emits = defineEmits(['buttonClickEvent']);

const height = props.isBigView ? "h-[95vh]" : "h-[40vh]";

onNuxtReady(() => {
  if (props.hasButton && stringHelper.IsNullOrEmpty(props.buttonText)) {
    throw new Error("Button text is required when button is enabled.");
  }
});

function buttonClickEvent() {
  emits("buttonClickEvent");
}

function scrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}
</script>

<template>
  <div :class="height"
    class="w-full px-8 relative bgImg bg-gradient-radial from-accent1 to-accent2 dark:from-white/40 dark:to-transparent">
    <div class="h-full flex flex-col justify-center items-center md:items-baseline gap-8 container mx-auto">
      <div class="w-full flex flex-col gap-4 py-4">
        <h1 class="font-extrabold text-white text-center lg:text-left text-3xl lg:text-4xl my-2 animate-fade-right">
          {{ title }}
        </h1>

        <h2 class="font-bold text-white text-center lg:text-left text-2xl lg:text-3xl my-2 animate-fade-right">
          {{ subTitle }}
        </h2>

        <p v-for="paragraph in paragraphs"
          class="w-full lg:max-w-md text-center lg:text-left text-white animate-fade-right">
          {{ paragraph }}
        </p>

        <button v-show="hasButton" @click="buttonClickEvent" :aria-hidden="!hasButton" :aria-label="buttonText ?? ''"
          class="btn btn-outline mx-auto lg:mx-0 font-medium text-base text-white border-gray-400 rounded-full w-64 px-6 animate-fade-in">
          {{ buttonText }}

          <fa-icon icon="arrow-right" class="ml-4 animate-bounce-horizontal" />
        </button>
      </div>

      <fa-icon v-if="isBigView" icon="arrow-down" size="2x" @click="scrollDown"
        class="absolute bottom-6 left-[47%] sm:left-1/2 -translate-x-1/2 text-white cursor-pointer animate-bounce"
        aria-label="Runterscrollen" />
    </div>
  </div>
</template>

<style scoped>
.bgImg {
  background-image: url("https://cdn.pixabay.com/photo/2024/02/28/17/16/ai-generated-8602502_1280.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.animate-fade-right {
  animation: fade-right 1s ease-in-out;
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

@keyframes fade-right {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>