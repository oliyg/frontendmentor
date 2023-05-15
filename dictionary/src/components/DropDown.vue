<script setup lang="ts">
import { computed, ref } from "vue";
import IconArrowVue from "./icons/IconArrow.vue";
import { useHomeStore } from "@/stores/home";

const homeStore = useHomeStore();
const options = computed(() => homeStore.fontType);
const selected = computed(() => homeStore.selectedFont);
const select = (val: string) => {
  homeStore.selectFont(val);
  toggle();
};

const show = ref(false);
const toggle = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="relative flex items-center">
    <span
      class="mr-4 block cursor-pointer text-sm font-bold dark:text-white tablet:mr-[1.125rem] tablet:text-base desktop:mr-[1.125rem]"
      @click="toggle"
      >{{ selected }}</span
    >
    <IconArrowVue @click="toggle" class="block w-3 cursor-pointer" />

    <div
      class="absolute right-0 top-10 w-[11.4375rem] rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-600 dark:shadow-darkXl"
      v-if="show"
    >
      <p
        class="mb-4 cursor-pointer font-bold last:mb-0 hover:text-purple dark:text-white"
        :class="{
          'font-sans': item === 'Sans Serif',
          'font-serif': item === 'Serif',
          'font-mono': item === 'Mono',
        }"
        v-for="item in options"
        :key="item"
        @click="select(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>
