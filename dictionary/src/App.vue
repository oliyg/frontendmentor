<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="mobile:w-full mx-auto p-[1.5rem] dark:bg-black tablet:w-full tablet:px-[2.4375rem] tablet:py-[3.625rem] desktop:w-6/12 desktop:p-[3.625rem]"
  >
    <RouterView />
  </div>
</template>
