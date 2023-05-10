<script setup>
import { getCurrentInstance, computed } from 'vue';
const bg = computed(() => 'bg' in getCurrentInstance().attrs)
</script>

<template>
    <div :class="{ 'page-container': true, bg }">
        <div class="page-container-inner">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-container {
    position: absolute;
    min-height: calc(100vh - 80px);
    top: 80px;
    left: 0;
    right: 0;
    padding: 24px 16px;

    &.bg {
        background: var(--color-background-soft);
    }
}

@media screen and (min-width: 1440px) {
    .page-container {
        min-height: calc(100vh - 80px);
        top: 80px;
        padding: 24px auto;

        .page-container-inner {
            margin: 0 auto;
            max-width: 1280px;
        }
    }
}
</style>
