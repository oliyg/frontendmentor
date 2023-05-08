<script setup>
import searchIcon from "@/assets/search.svg";
</script>

<template>
    <div class="search-bar-container">
        <img :src="searchIcon" alt="search icon" class="icon" />
        <input type="text" class="kw-input" placeholder="Search for a country…" />
    </div>
</template>

<style scoped lang="scss">
.search-bar-container {
    display: flex;
    width: 100%;
    height: 48px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    padding: 16px 32px;

    .icon {
        display: inline-block;
        margin-right: 26px;
    }

    .kw-input {
        border: none;
        outline: none;
        font-size: 12px;
        line-height: 20px;
        width: 100%;

        &::placeholder {
            color: #C4C4C4;
        }
    }
}

@media (min-width: 1440px) {
    .search-bar-container {
        max-width: 480px;
        height: 56px;
        padding: 19px 32px;
        border-radius: 5px;

        .icon {
            width: 18px;
            height: 18px;
            margin-right: 24px;
        }

        .kw-input {
            font-size: 14px;
        }
    }
}
</style>