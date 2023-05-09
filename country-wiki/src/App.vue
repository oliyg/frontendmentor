<script setup>
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <MainHeader />
  <div class="page-container">
    <RouterView />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100&display=swap');

.page-container {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin: 24px 16px;
}

@media screen and (min-width: 1440px) {
  .page-container {
    top: 80px;
    margin: 48px auto;
    max-width: 1280px;
  }
}
</style>
