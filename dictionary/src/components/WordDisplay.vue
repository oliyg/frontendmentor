<script setup lang="ts">
import { computed } from "vue";
import IconPlayVue from "./icons/IconPlay.vue";
import { useHomeStore } from "@/stores/home";
const homeStore = useHomeStore();
const result = computed(() => homeStore.result[0]);
const phonetic = computed(
  () => result.value.phonetics.filter((itm) => itm.text && itm.audio)[0] ?? {}
);
const onPlay = () => {
  if (!phonetic.value.audio) return;
  var audio = new Audio(phonetic.value.audio);
  audio.play();
};
</script>

<template>
  <div
    class="flex h-[4.25rem] items-center justify-between tablet:h-[7.125rem]"
  >
    <div class="flex-col items-center">
      <p class="text-[2rem] font-bold dark:text-white tablet:text-[4rem]">
        {{ result.word }}
      </p>
      <p class="text-purple tablet:text-[1.5rem] tablet:leading-[1.8125rem]">
        {{ phonetic.text }}
      </p>
    </div>
    <IconPlayVue
      class="h-12 w-12 cursor-pointer tablet:h-[4.6875rem] tablet:w-[4.6875rem]"
      @click="onPlay"
    />
  </div>
</template>
