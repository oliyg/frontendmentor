<script setup>
import CountryFlag from './CountryFlag.vue';
</script>

<template>
    <div class="wall-container">
        <CountryFlag />
        <CountryFlag />
        <CountryFlag />
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
