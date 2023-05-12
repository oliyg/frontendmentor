<script setup lang="ts">
import DividerHorizontal from "./DividerHorizontal.vue";
import IconExternalLink from "./icons/IconExternalLink.vue";

const props = defineProps<{
  title: string;
  desc: {
    means: string;
    example: string;
  }[];
  links?: string[];
  url?: string;
}>();
</script>

<template>
  <div class="text-[0]">
    <div class="flex items-center">
      <p
        class="mr-4 text-base font-bold dark:text-white tablet:text-[1.5rem] tablet:leading-[1.8125rem] desktop:mr-5"
      >
        {{ title }}
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
        v-for="(itm, idx) in props.desc"
        :key="idx"
        class="mb-[.8125rem] font-serif text-[.9375rem] leading-6 text-gray-500 dark:text-white tablet:text-[1.125rem] tablet:leading-[1.5rem]"
      >
        <p>{{ itm.means }}</p>
        <p
          v-if="itm.example"
          class="mt-[.8125rem] text-[.9375rem] leading-6 text-gray-300 tablet:text-base tablet:leading-6"
        >
          {{ itm.example }}
        </p>
      </li>
    </ul>
    <p
      v-if="links"
      class="mb-[1.0625rem] mt-8 text-[1rem] text-gray-300 tablet:mb-[1.5625rem] tablet:mt-10 tablet:text-lg tablet:leading-6 desktop:mb-10 desktop:mt-10"
    >
      Synonyms
      <span
        v-for="(item, index) in links"
        :key="index"
        class="inline-block cursor-pointer pl-2 text-[1rem] font-bold text-purple first:pl-6 desktop:text-lg desktop:leading-6"
        >{{ item }}</span
      >
    </p>
    <DividerHorizontal class="mb-6 mt-8 tablet:mb-[1.1875rem] tablet:mt-10" />
    <p
      v-if="url"
      class="mb-2 text-[1rem] text-gray-300 underline tablet:mr-5 tablet:inline-block tablet:text-lg"
    >
      Source
    </p>
    <a
      v-if="url"
      :href="url"
      class="inline-block cursor-pointer leading-[1.0625rem] text-gray-500 tablet:text-lg"
    >
      <span
        class="align-middle font-serif text-sm underline dark:text-white tablet:text-lg"
        >{{ url }}</span
      >
      <IconExternalLink
        class="ml-[.5625rem] inline-block h-3 w-3 align-middle"
      />
    </a>
  </div>
</template>
