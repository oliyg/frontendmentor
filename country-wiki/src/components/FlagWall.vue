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
        width: min-content;
        margin: 0 auto;
    }
}

@media screen and (min-width: 1440px) {
    .wall-container {
        --margin-top: 48px;
        --row-gap: 40px;
        --column-gap: 70px;

        grid-template-columns: repeat(4, 1fr);
        column-gap: var(--column-gap);
    }
}

.wall-container {
    margin-top: var(--margin-top);
    row-gap: var(--row-gap);
    display: grid;
}
</style>
