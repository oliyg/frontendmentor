<script setup lang="ts">
import { ref } from 'vue';
import IconArrowVue from './icons/IconArrow.vue';

const title = ref('Sans Serif');
</script>

<template>
    <div class="flex items-center">
        <span class="block text-sm font-bold mr-4 tablet:text-base tablet:mr-[1.125rem] desktop:mr-[1.125rem]">{{ title
        }}</span>
        <IconArrowVue class="block w-3" />
    </div>
</template>