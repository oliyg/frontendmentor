<script setup lang="ts">
import IconPlayVue from "./icons/IconPlay.vue";
</script>

<template>
  <div
    class="flex h-[4.25rem] items-center justify-between tablet:h-[7.125rem]"
  >
    <div class="flex-col items-center">
      <p class="text-[2rem] font-bold dark:text-white tablet:text-[4rem]">
        Keyboard
      </p>
      <p class="text-purple tablet:text-[1.5rem] tablet:leading-[1.8125rem]">
        /ˈkiːbɔːd/
      </p>
    </div>
    <IconPlayVue
      class="h-12 w-12 cursor-pointer tablet:h-[4.6875rem] tablet:w-[4.6875rem]"
    />
  </div>
</template>
