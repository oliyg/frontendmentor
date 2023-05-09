<script setup>
import MainTools from "@/components/MainTools.vue";
import FlagWall from "@/components/FlagWall.vue";
import { useDbStore } from "@/stores/home";
const dbStore = useDbStore();
dbStore.queryAllData()

</script>

<template>
  <MainTools />
  <FlagWall class="flag-wall" />
</template>
