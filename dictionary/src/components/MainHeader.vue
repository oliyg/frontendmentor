<script setup lang="ts">
import DarkModeVue from './DarkMode.vue';
import DividerVue from './Divider.vue'
import DropDownVue from './DropDown.vue';
import IconBookVue from './icons/IconBook.vue';
</script>

<template>
    <div class="flex justify-between">
        <IconBookVue class="block w-7 h-8 tablet:w-8 tablet:h-9" />
        <div class="flex items-center">
            <DropDownVue />
            <DividerVue />
            <DarkModeVue />
        </div>
    </div>
</template>