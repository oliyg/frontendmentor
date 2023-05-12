<script setup lang="ts">
import { ref, watch } from "vue";
import IconSearchVue from "./icons/IconSearch.vue";

const txt = ref("Keyboard");

const valid = ref(true);
const verify = () => {
  valid.value = !!txt.value;
};

const emit = defineEmits<{
  (e: "search", txt: string): void;
}>();

const onSearch = () => {
  if (!valid.value) return;
  console.log("🚀 ~ file: SearchBar.vue:20 ~ onSearch ~ txt.value:", txt.value);
  emit("search", txt.value);
};

watch(txt, verify);
</script>

<template>
  <div>
    <div
      class="flex h-12 w-full content-between rounded-2xl bg-gray-100 px-6 py-[.875rem] tablet:h-16 tablet:py-5"
      :class="{
        'border border-red': !valid,
        'border border-transparent ': valid,
      }"
    >
      <input
        type="text"
        v-model="txt"
        @keyup.enter="onSearch"
        class="h-full w-full bg-transparent text-[1rem] font-bold leading-[1.1875rem] outline-none tablet:text-lg tablet:leading-6"
      />
      <IconSearchVue class="w-[.971875rem] cursor-pointer" @click="onSearch" />
    </div>

    <div v-if="!valid" class="mt-2 text-lg text-red">
      Whoops, can’t be empty…
    </div>
  </div>
</template>
