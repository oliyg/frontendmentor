<script setup lang="ts">
import { RouterView } from "vue-router";
import { useHomeStore } from "@/stores/home";
import { computed } from "vue";

const homeStore = useHomeStore();
const selected = computed(() => homeStore.selectedFont);
</script>

<template>
  <div
    class="mobile:w-full mx-auto min-h-screen p-[1.5rem] dark:bg-black tablet:w-full tablet:px-[2.4375rem] tablet:py-[3.625rem] desktop:w-6/12 desktop:p-[3.625rem]"
    :class="{
      'font-sans': selected === 'Sans Serif',
      'font-serif': selected === 'Serif',
      'font-mono': selected === 'Mono',
    }"
  >
    <RouterView />
  </div>
</template>
