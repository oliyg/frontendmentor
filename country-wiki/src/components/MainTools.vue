<script setup>
import SearchBar from "@/components/SearchBar.vue";
import DropDown from '@/components/DropDown.vue'
import { useDbStore } from "@/stores/home";
import { computed } from "vue";
const dbStore = useDbStore()
const regions = computed(() => dbStore.regions)

const onSelect = itm => {
    dbStore.setSelectedRegion(itm.name)
}
const onChange = kw => {
    dbStore.setKw(kw)
}
</script>

<template>
    <div class="tools">
        <SearchBar class="search-bar" @change="onChange" />
        <DropDown class="filter-menu" :options="regions" @select="onSelect" />
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