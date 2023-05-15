<script setup lang="ts">
import DividerHorizontal from "./DividerHorizontal.vue";

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

export type Definition = {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
};

const props = defineProps<Meaning>();
</script>

<template>
  <div class="text-[0]">
    <div class="flex items-center">
      <p
        class="mr-4 text-base font-bold dark:text-white tablet:text-[1.5rem] tablet:leading-[1.8125rem] desktop:mr-5"
      >
        {{ props.partOfSpeech }}
      </p>
      <DividerHorizontal />
    </div>
    <p
      class="mb-[1.0625rem] mt-8 text-[1rem] text-gray-300 tablet:mb-[1.5625rem] tablet:mt-[2.5rem] tablet:text-lg tablet:leading-6"
    >
      Meaning
    </p>
    <ul class="ml-5 list-outside list-disc marker:text-purple tablet:ml-10">
      <li
        v-for="(itm, idx) in props.definitions"
        :key="idx"
        class="mb-[.8125rem] font-serif text-[.9375rem] leading-6 text-gray-500 dark:text-white tablet:text-[1.125rem] tablet:leading-[1.5rem]"
      >
        <p>{{ itm.definition }}</p>
        <p
          v-if="itm.example"
          class="mt-[.8125rem] text-[.9375rem] leading-6 text-gray-300 tablet:text-base tablet:leading-6"
        >
          {{ itm.example }}
        </p>
      </li>
    </ul>
    <p
      v-if="props.synonyms && props.synonyms.length"
      class="mb-[1.0625rem] mt-8 text-[1rem] text-gray-300 tablet:mb-[1.5625rem] tablet:mt-10 tablet:text-lg tablet:leading-6 desktop:mb-10 desktop:mt-10"
    >
      Synonyms
      <span
        v-for="(item, index) in props.synonyms"
        :key="index"
        class="inline-block cursor-pointer pl-2 text-[1rem] font-bold text-purple first:pl-6 desktop:text-lg desktop:leading-6"
        >{{ item }}</span
      >
    </p>
    <DividerHorizontal class="mb-6 mt-8 tablet:mb-[1.1875rem] tablet:mt-10" />
  </div>
</template>
