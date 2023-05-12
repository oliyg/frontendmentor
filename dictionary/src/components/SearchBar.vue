<script setup lang="ts">
import { ref } from 'vue';
import IconSearchVue from './icons/IconSearch.vue';
const txt = ref("keyboard")
</script>

<template>
    <div class="flex rounded-2xl content-between w-full h-12 px-6 py-[.875rem] bg-gray-100 tablet:h-16 tablet:py-5">
        <input type="text" v-model="txt"
            class="outline-none h-full w-full bg-transparent text-[1rem] font-bold leading-[1.1875rem] tablet:text-lg tablet:leading-6">
        <IconSearchVue class="w-[.971875rem] cursor-pointer" />
    </div>
</template>