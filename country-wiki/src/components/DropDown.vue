<script setup>
import arrowImg from "@/assets/arrow.svg";
import { ref, computed } from "vue";
const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
})

/* --------------------------------- keyword -------------------------------- */
const kw = ref('')
const filteredOptions = computed(() => {
    return props.options.filter(itm => itm.name.toLocaleLowerCase().startsWith(kw.value.toLocaleLowerCase()))
})

/* --------------------------------- options -------------------------------- */
const showList = ref(false);
const onToggleShowList = () => {
    showList.value = !showList.value
}
const onShowList = () => {
    showList.value = true
}
const emits = defineEmits({
    select: (itm) => {
        return itm
    }
})

/* ----------------------------- selectedOption ---------------------------- */
const selected = ref(null);
const onSelect = (itm) => {
    kw.value = itm.name
    selected.value = itm
    emits("select", itm)
    onToggleShowList()
}
</script>

<template>
    <div class="dropdown-container">
        <input type="text" class="txt" v-model="kw" @click="onShowList" />
        <img :src="arrowImg" alt="arrow icon" :class="{ icon: true, active: showList }" @click="onToggleShowList">

        <div class="dropdown-list" v-if="showList">
            <div class="itm" @click="onSelect(item)" v-for="(item, index) in filteredOptions" :key="index">{{ item.name }}
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.dropdown-container {
    @media screen and (max-width: 1440px) {
        --height: 48px;
        --width: 200px;
        --size-icon: 10px;
        --padding: 14px 24px;
        --font-size: 12px;
        --dropdown-padding: 16px 24px;
        --dropdown-max-height: 144px;
        --dropdown-list-top: calc(var(--height) + 4px);
        --itm-font-size: 12px;
        --itm-margin-bottom: 8px;
    }

    @media screen and (min-width: 1440px) {
        --height: 56px;
        --width: 200px;
        --size-icon: 12px;
        --padding: 18px 24px;
        --font-size: 14px;
        --dropdown-padding: 16px 24px;
        --dropdown-max-height: 164px;
        --dropdown-list-top: calc(var(--height) + 4px);
        --itm-font-size: 14px;
        --itm-margin-bottom: 8px;
    }

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--width);
    height: var(--height);
    padding: var(--padding);

    background: var(--color-background);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);

    .txt {
        width: 100%;
        height: 100%;
        font-size: var(--font-size);

        color: var(--color-font);
    }

    .icon {
        display: inline-block;
        width: var(--size-icon);
        height: var(--size-icon);
        cursor: pointer;
        transition: transform 0.3s;

        &.active {
            transform: rotate(180deg);
            transition: transform 0.3s;
        }
    }

    .dropdown-list {
        position: absolute;
        top: var(--dropdown-list-top);
        left: 0;
        right: 0;
        padding: var(--dropdown-padding);
        max-height: var(--dropdown-max-height);
        overflow: hidden;
        overflow-y: auto;

        background: var(--color-background);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
        z-index: 2;

        .itm {
            font-size: var(--itm-font-size);
            margin-bottom: var(--itm-margin-bottom);
            cursor: pointer;
        }
    }
}
</style>