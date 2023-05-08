<template>
    <div class="main-header-container">
        <p class="title">Where in the world?</p>
        <div class="theme-toggle">
            <img :src="toggleImg" alt="toggle theme" class="img">
            <span class="txt">Dark Mode</span>
        </div>
    </div>
</template>

<script setup>
import toggleImg from "@/assets/toggle.svg";
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

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
    font-size: 0;
    font-family: 'Nunito Sans';
    font-style: normal;

    .title {
        font-weight: 800;
        font-size: 14px;
    }

    .theme-toggle {
        .img {
            font-weight: 400;
            display: inline-block;
            margin-right: 8px;
            width: 16px;
            height: 16px;
            vertical-align: middle;
        }

        .txt {
            font-style: normal;
            vertical-align: middle;
            font-weight: 600;
            font-size: 12px;

            color: #111517;
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