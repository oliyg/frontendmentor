<script setup>
import searchIcon from "@/assets/search.svg";
import { ref } from "vue";

const emits = defineEmits(['change'])

const kw = ref('')
const onChange = () => {
    emits('change', kw.value)
}
</script>

<template>
    <div class="search-bar-container">
        <img :src="searchIcon" alt="search icon" class="icon" />
        <input type="text" class="kw-input" placeholder="Search for a country…" v-model="kw" @change="onChange" />
    </div>
</template>

<style scoped lang="scss">
@media (max-width: 1440px) {
    .search-bar-container {
        --width: 100%;
        --height: 48px;
        --padding: 16px 32px;
        --icon-width: 16px;
        --margin-right: 26px;
        --font-size: 12px;
    }
}

@media (min-width: 1440px) {
    .search-bar-container {
        --width: 480px;
        --height: 56px;
        --padding: 19px 32px;
        --icon-width: 18px;
        --margin-right: 24px;
        --font-size: 14px;
    }
}

.search-bar-container {
    display: flex;
    height: var(--height);
    width: var(--width);
    border-radius: var(--border-radius);
    background-color: var(--color-background-color);
    box-shadow: var(--box-shadow);
    padding: var(--padding);

    .icon {
        display: inline-block;
        width: var(--icon-width);
        margin-right: var(--margin-right);
    }

    .kw-input {
        font-size: var(--font-size);
        line-height: 20px;
        width: 100%;

        &::placeholder {
            color: #C4C4C4;
        }
    }
}
</style>