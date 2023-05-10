<script setup>
import { useDbStore } from '@/stores/home';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    country: {
        type: Object,
    }
})

const dbStore = useDbStore()
const db = computed(() => dbStore.db)
const alpha3CodeToName = (borders) => {
    const countries = []
    borders?.forEach(code => {
        const itm = db.value.find(itm => itm.alpha3Code === code)
        itm && countries.push(itm)
    });
    return countries
}

const router = useRouter()
const onClick = (itm) => {
    router.replace({ name: 'detail', query: { code: itm.alpha3Code } })
}
</script>

<template>
    <div class="country-detail-container" v-if="country">
        <div class="flag" :style="{ backgroundImage: `url(${country.flags.svg})` }" :alt="country.name + 'flag'">
        </div>
        <div class="detail">
            <p class="name">{{ country.name }}</p>
            <div class="infos">
                <div class="info">
                    <p class="info-title">Native Name: <span class="info-val">{{ country.nativeName }}</span></p>
                    <p class="info-title">Population: <span class="info-val">{{ country.population }}</span></p>
                    <p class="info-title">Region: <span class="info-val">{{ country.region }}</span></p>
                    <p class="info-title">Sub Region: <span class="info-val">{{ country.subregion }}</span></p>
                    <p class="info-title">Capital: <span class="info-val">{{ country.capital }}</span></p>
                </div>
                <div class="info">
                    <p class="info-title">Top Level Domain: <span class="info-val">{{ country.topLevelDomain.toString()
                    }}</span>
                    </p>
                    <p class="info-title">Currencies: <span class="info-val">{{ country.currencies.map(itm =>
                        itm.code).toString()
                    }}</span></p>
                    <p class="info-title">Languages: <span class="info-val">{{ country.languages.map(itm =>
                        itm.name).toString()
                    }}</span></p>
                </div>
            </div>
            <div class="extra">
                <p class="extra-title">Border Countries: </p>
                <div class="btns">
                    <span class="btn" v-for="itm in alpha3CodeToName(country.borders)" :key="itm.name"
                        @click="onClick(itm)">{{ itm.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@media screen and (max-width: 1440px) {
    .country-detail-container {
        .flag {
            --width: 320px;
            --height: 229px;
            --border-radius: 5px;
        }

        .detail {
            .name {
                --font-weight: 800;
                --font-size: 22px;
                --line-height: 30px;
                --margin-bottom: 16px;
                margin-top: 44px;
            }

            .infos {
                .info {
                    --line-height: 32px;
                    --margin-bottom: 32px;

                    .info-title {
                        --font-weight: 600;
                    }

                    .info-val {
                        --font-weight: 400;
                    }
                }
            }

            .extra {
                .extra-title {
                    --font-weight: 600;
                    --font-size: 16px;
                    --margin-bottom: 16px;
                }

                .btns {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    column-gap: 10px;
                    row-gap: 10px;

                    .btn {
                        --background: #FFFFFF;
                        --box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
                        --border-radius: 2px;
                        --height: 28px;
                        --line-height: 28px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1440px) {
    .country-detail-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 144px;

        .flag {
            --width: 560px;
            --height: 410px;
            --border-radius: 8px;
        }

        .detail {
            margin-top: 39px;

            .name {
                --font-weight: 800;
                --font-size: 32px;
                --line-height: 44px;
                --margin-bottom: 23px;
            }

            .infos {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 177px;

                .info {
                    font-size: 16px;
                    --line-height: 32px;
                    --margin-bottom: 32px;

                    .info-title {
                        --font-weight: 600;
                    }

                    .info-val {
                        --font-weight: 400;
                    }
                }
            }

            .extra {
                .extra-title {
                    display: inline-block;
                    --font-weight: 600;
                    --font-size: 16px;
                    --margin-bottom: initial;
                }

                .btns {
                    .btn {
                        --background: #FFFFFF;
                        --box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
                        font-size: 14px;
                        --border-radius: 2px;
                        --height: 19px;
                        --line-height: 19px;
                        margin-right: 10px;
                        padding: 0 27px;
                    }
                }
            }
        }
    }
}

.country-detail-container {
    .flag {
        width: var(--width);
        height: var(--height);
        background-size: cover;
        background-position: center;
        border-radius: var(--border-radius);
    }

    .detail {
        .name {
            font-weight: var(--font-weight);
            font-size: var(--font-size);
            line-height: var(--line-height);
            margin-bottom: var(--margin-bottom);
        }

        .infos {
            .info {
                line-height: var(--line-height);
                margin-bottom: var(--margin-bottom);

                .info-title {
                    font-weight: var(--font-weight);
                }

                .info-val {
                    font-weight: var(--font-weight);
                }
            }
        }

        .extra {
            .extra-title {
                font-weight: var(--font-weight);
                font-size: var(--font-size);
                margin-bottom: var(--margin-bottom);

            }

            .btns {
                .btn {
                    display: inline-block;
                    text-align: center;
                    background: var(--background);
                    box-shadow: var(--box-shadow);
                    border-radius: var(--border-radius);
                    height: var(--height);
                    line-height: var(--line-height);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>