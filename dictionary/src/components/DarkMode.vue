<script setup lang="ts">
import IconToggleDisableVue from "./icons/IconToggleDisable.vue";
import IconToggleEnableVue from "./icons/IconToggleEnable.vue";
import IconHalfMoon from "./icons/IconHalfMoon.vue";
import IconHalfMoonEnable from "./icons/IconHalfMoonEnable.vue";
import { ref } from "vue";

const init = () => {
  let initial = false;
  if ("theme" in localStorage) {
    initial = localStorage.theme === "light" ? false : true;
  }
  return initial;
};

const bool = ref(init());

const setDarkMode = () => {
  // Whenever the user explicitly chooses light mode
  bool.value = !bool.value;
  localStorage.theme = bool.value ? "dark" : "light";
  document.documentElement.classList.toggle("dark");
  console.log(
    "🚀 ~ file: DarkMode.vue:13 ~ setDarkMode ~ localStorage.theme:",
    localStorage.theme
  );
};
</script>

<template>
  <IconToggleDisableVue
    @click="setDarkMode"
    v-if="!bool"
    class="mr-3 h-5 w-10 cursor-pointer tablet:mr-5"
  />
  <IconToggleEnableVue
    v-else
    @click="setDarkMode"
    class="mr-3 h-5 w-10 rotate-180 cursor-pointer tablet:mr-5"
  />
  <IconHalfMoon v-if="!bool" class="h-5 w-5" />
  <IconHalfMoonEnable v-else />
</template>
