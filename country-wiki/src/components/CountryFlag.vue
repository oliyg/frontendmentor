<script setup>
import ExampleFlag from '@/assets/exampleFlag.png'
</script>

<template>
    <div class="country-flag-container">
        <img class="flag-img" :src="ExampleFlag" alt="">
        <div class="country-desc">
            <p class="country-name">Germany</p>
            <div class="country-info">
                <span class="country-info-title">Population: </span>
                <span class="country-info-val">81,770,900</span>
            </div>
            <div class="country-info">
                <span class="country-info-title">Region: </span>
                <span class="country-info-val">Europe</span>
            </div>
            <div class="country-info">
                <span class="country-info-title">Capital: </span>
                <span class="country-info-val">Berlin</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@media screen and (max-width: 1440px) {
    .country-flag-container {
        --width: 264px;
        --height: 336px;
        --flag-img-height: 160px;
        --desc-padding: 24px;
        --country-name-size: 18px;
        --country-name-weight: 800;
        --country-name-margin: 16px;
        --country-info-font-size: 14px;
        --country-info-title-weight: 600;
        --country-info-val-weight: 400;
        --country-info-margin: 8px;
    }
}

@media screen and (min-width: 1440px) {
    .country-flag-container {
        --width: 264px;
        --height: 336px;
        --flag-img-height: 160px;
        --desc-padding: 24px;
        --country-name-size: 18px;
        --country-name-weight: 800;
        --country-name-margin: 16px;
        --country-info-font-size: 14px;
        --country-info-title-weight: 600;
        --country-info-val-weight: 400;
        --country-info-margin: 8px;
    }
}

.country-flag-container {
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: var(--color-background-color);

    .flag-img {
        display: block;
        height: var(--flag-img-height);
        width: 100%;
    }

    .country-desc {
        padding: var(--desc-padding);

        .country-name {
            font-size: var(--country-name-size);
            font-weight: var(--country-name-weight);
            margin-bottom: var(--country-name-margin);
        }

        .country-info {
            font-size: 0;
            display: block;
            margin-bottom: var(--country-info-margin);

            .country-info-title {
                font-size: var(--country-info-font-size);
                font-weight: var(--country-info-title-weight);
            }

            .country-info-val {
                font-size: var(--country-info-font-size);
                font-weight: var(--country-info-val-weight);
            }
        }
    }
}
</style>