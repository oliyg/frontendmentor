<script setup>
import callMadeImg from '@/assets/call-made.svg'
import { useRouter } from 'vue-router';
const router = useRouter()

const goBack = () => {
    router.back()
}

</script>

<template>
    <div class="go-back-container" @click="goBack">
        <img class="icon" :src="callMadeImg" alt="" srcset="">
        <span class="txt">Back</span>
    </div>
</template>

<style lang="scss">
.go-back-container {
    @media screen and (max-width: 1440px) {
        --width: 104px;
        --height: 32px;
        --line-height: 32px;
        --icon-margin-right: 8px;
        --icon-width: 18px;
        --icon-height: 18px;
        --font-size: 14px;
        --box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
        --border-radius: 2px;

        box-shadow: var(--box-shadow);
    }

    @media screen and (min-width: 1440px) {
        --width: 136px;
        --height: 40px;
        --line-height: 40px;
        --icon-margin-right: 10.57px;
        --icon-width: 20px;
        --icon-height: 20px;
        --font-size: 16px;
        --box-shadow: none;
        --border-radius: 6px;

        box-shadow: var(--box-shadow);
    }

    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    text-align: center;
    line-height: var(--line-height);
    font-size: 0;
    cursor: pointer;

    .icon {
        display: inline-block;
        width: var(--icon-width);
        height: var(--icon-height);
        margin-right: var(--icon-margin-right);
        vertical-align: middle;
    }

    .txt {
        vertical-align: middle;
        font-size: var(--font-size);
    }
}
</style>