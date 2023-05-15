<script setup lang="ts">
import ExternalLink from "@/components/ExternalLink.vue";
import MainHeader from "@/components/MainHeader.vue";
import NoDefinitionVue from "@/components/NoDefinition.vue";
import SearchBar from "@/components/SearchBar.vue";
import WordDesc from "@/components/WordDesc.vue";
import WordDisplayVue from "@/components/WordDisplay.vue";
import { useHomeStore } from "@/stores/home";
import { computed } from "vue";
const homeStore = useHomeStore();

const onSearch = (word: string) => homeStore.query(word);

const result = computed(() => homeStore.result);
const hasErr = computed(() => homeStore.hasErr);
const data = computed(() => result.value[0] ?? {});

const meanings = computed(() => data.value?.meanings ?? []);

const licence = computed(() => data.value?.license ?? {});
</script>

<template>
  <MainHeader />
  <SearchBar
    class="my-6 desktop:mb-[2.8125rem] desktop:mt-[3.21875rem]"
    @search="onSearch"
  />

  <template v-if="result.length">
    <WordDisplayVue />
    <WordDesc
      v-for="(item, index) in meanings"
      :key="index"
      :part-of-speech="item.partOfSpeech"
      :definitions="item.definitions"
      :synonyms="item.synonyms"
      :antonyms="item.antonyms"
      class="mt-8 tablet:mt-[2.6875rem] desktop:mt-[2.5rem]"
    />
    <ExternalLink :name="licence.name" :url="licence.url" />
  </template>

  <NoDefinitionVue v-if="hasErr" class="mt-[8.25rem]" />
</template>
