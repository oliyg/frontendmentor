<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";

const onPlay = () => {
  const audio = new Audio("test.mp3");
  audio.play();
};
</script>

<template>
  <button @click="onPlay">play</button>
</template>
