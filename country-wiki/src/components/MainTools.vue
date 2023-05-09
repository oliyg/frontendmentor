<script setup>
import SearchBar from "@/components/SearchBar.vue";
import DropDown from '@/components/DropDown.vue'

const onSelect = itm => {
    console.log("🚀 ~ file: HomeView.vue:5 ~ onSelect ~ itm:", itm)
}
const onChange = kw => {
    console.log("🚀 ~ file: HomeView.vue:9 ~ onChange ~ kw:", kw)
}
</script>

<template>
    <div class="tools">
        <SearchBar class="search-bar" @change="onChange" />
        <DropDown class="filter-menu" :options="[{ name: 'Africa' }, { name: 'US' }, { name: 'China' }]"
            @select="onSelect" />
    </div>
</template>

<style lang="scss">
.tools {
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 1440px) {
    .tools .search-bar {
        margin-bottom: 40px;
    }
}

@media screen and (min-width: 1440px) {
    .tools {
        flex-direction: row;
        justify-content: space-between;

        .search-bar {
            margin-bottom: 40px;
        }
    }
}
</style>