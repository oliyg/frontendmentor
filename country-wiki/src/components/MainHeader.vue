<template>
    <div class="main-header-container">
        <p class="title" @click="onClick">Where in the world?</p>
        <div class="theme-toggle" @click="onToggleTheme">
            <img :src="toggleImg" alt="toggle theme" class="img">
            <span class="txt">Dark Mode</span>
        </div>
    </div>
</template>

<script setup>
import toggleImg from "@/assets/toggle.svg";
import { useDbStore } from "@/stores/home";
import { useRouter } from "vue-router";
const router = useRouter()
const onClick = () => {
    router.push({ name: 'home' })
};
const dbStore = useDbStore()
const onToggleTheme = () => {
    dbStore.toggleTheme()
}
</script>

<style lang="scss">
.main-header-container {
    position: absolute;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 16px;
    background: var(--color-background-soft);
    box-shadow: var(--box-shadow);
    font-size: 0;
    z-index: 1;

    .title {
        font-weight: 800;
        font-size: var(--font-size);
    }

    .theme-toggle {
        cursor: pointer;

        .img {
            font-weight: 400;
            display: inline-block;
            margin-right: 8px;
            width: 16px;
            height: 16px;
            vertical-align: middle;
        }

        .txt {
            vertical-align: middle;
            font-weight: 600;
            font-size: 12px;

            color: #111517;
            cursor: pointer;
        }

    }
}

@media screen and (min-width: 1440px) {
    .main-header-container {
        padding: 30px 80px;
        height: 80px;

        .title {
            font-size: 24px;
        }

        .theme-toggle {
            .img {
                height: 20px;
                width: 20px;
                margin-right: 8px;
            }

            .txt {
                font-size: 16px;
            }
        }
    }
}
</style>