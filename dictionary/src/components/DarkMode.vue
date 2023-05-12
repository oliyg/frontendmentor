<script setup lang="ts">
import IconToggleDisableVue from './icons/IconToggleDisable.vue';
import IconToggleEnableVue from './icons/IconToggleEnable.vue';
import IconHalfMoon from './icons/IconHalfMoon.vue';
import { ref } from 'vue';

const bool = ref(false)
const toggle = () => (bool.value = !bool.value)
</script>

<template>
    <IconToggleDisableVue @click="toggle" v-if="!bool" class="mr-3 w-10 h-5 tablet:mr-5 cursor-pointer" />
    <IconToggleEnableVue v-else @click="toggle" class="mr-3 w-10 h-5 tablet:mr-5 rotate-180 cursor-pointer" />
    <IconHalfMoon class="w-5 h-5" />
</template>