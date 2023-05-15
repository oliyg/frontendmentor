<script setup lang="ts">
import IconExternalLink from "./icons/IconExternalLink.vue";

export type License = {
  name: string;
  url: string;
};

defineProps<License>();
</script>

<template>
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
    <IconExternalLink class="ml-[.5625rem] inline-block h-3 w-3 align-middle" />
  </a>
</template>
