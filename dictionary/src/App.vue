<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="desktop:w-6/12 desktop:p-[3.625rem] tablet:w-full mobile:w-full tablet:px-[2.4375rem] tablet:py-[3.625rem] p-[1.5rem] mx-auto">
    <RouterView />
  </div>
</template>
