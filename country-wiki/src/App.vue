<script setup>
import MainHeader from './components/MainHeader.vue';
import { useDbStore } from "@/stores/home";
const dbStore = useDbStore();
dbStore.queryAllData()
</script>

<template>
  <MainHeader />
  <KeepAlive include="HomeView, DetailView">
    <RouterView />
  </KeepAlive>
</template>

