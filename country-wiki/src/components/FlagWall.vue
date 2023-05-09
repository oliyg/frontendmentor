<script setup>
import { useDbStore } from '@/stores/home';
import { computed } from 'vue';
import CountryFlag from './CountryFlag.vue';
const dbStore = useDbStore()
const filteredDb = computed(() => dbStore.filteredDb)
</script>

<template>
    <div class="wall-container">
        <CountryFlag v-for="(country, idx) in filteredDb" :key="country.name" :data="country" />
    </div>
</template>

<style lang="scss">
@media screen and (max-width: 1440px) {
    .wall-container {
        --margin-top: 32px;
        --row-gap: 40px;

        grid-template-columns: 1fr;
        row-gap: var(--row-gap);
        width: min-content;
        margin: 0 auto;
    }
}

@media screen and (min-width: 1440px) {
    .wall-container {
        --margin-top: 48px;
        --row-gap: 40px;

        grid-template-columns: repeat(4, 1fr);
        row-gap: var(--row-gap);
    }
}

.wall-container {
    margin-top: var(--margin-top);
    display: grid;
}
</style>
