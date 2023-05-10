<script setup>
import MainHeader from './components/MainHeader.vue';
import { useDbStore } from "@/stores/home";
const dbStore = useDbStore();
dbStore.queryAllData()
</script>

<template>
  <MainHeader />
  <RouterView v-slot="{ Component }">
    <KeepAlive include="HomeView, DetailView">
      <component :is="Component"></component>
    </KeepAlive>
  </RouterView>
</template>

