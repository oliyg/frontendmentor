<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import SearchBar from '@/components/SearchBar.vue';
import WordDesc from '@/components/WordDesc.vue';
import WordDisplayVue from '@/components/WordDisplay.vue';

const desc1 = [{ means: "(etc.) A set of keys used to operate a typewriter, computer etc.", example: "" },
{ means: "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.", example: "" },
{ means: "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.", example: "" }
]

const desc2 = [
  { means: "To type on a computer keyboard.", example: '“Keyboarding is the part of this job I hate the most.”' }
]

const links = ["electronic", "keyboard"]
const url = "https://en.wiktionary.org/wiki/keyboard"

</script>

<template>
  <MainHeader />
  <SearchBar class="my-6 desktop:mt-[3.21875rem] desktop:mb-[2.8125rem]" />
  <WordDisplayVue />
  <WordDesc title="noun" :desc="desc1" :links="links" class="mt-8 tablet:mt-[2.6875rem] desktop:mt-[2.5rem]" />
  <WordDesc title="verb" :desc="desc2" class="mt-8 tablet:mt-[2.6875rem]" :url="url" />
</template>
