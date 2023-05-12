<script setup lang="ts">
import DividerHorizontal from './DividerHorizontal.vue';
import IconExternalLink from './icons/IconExternalLink.vue'

const props = defineProps<{
    title: string,
    desc: {
        means: string;
        example: string;
    }[],
    links?: string[]
    url?: string
}>()

</script>

<template>
    <div class="text-[0]">
        <div class="flex items-center">
            <p class="font-bold text-base mr-4 tablet:text-[1.5rem] tablet:leading-[1.8125rem] desktop:mr-5">{{ title }}</p>
            <DividerHorizontal />
        </div>
        <p
            class="text-[1rem] text-gray-300 mt-8 mb-[1.0625rem] tablet:text-lg tablet:leading-6 tablet:mb-[1.5625rem] tablet:mt-[2.5rem]">
            Meaning</p>
        <ul class="list-disc list-outside marker:text-purple ml-5 tablet:ml-10">
            <li v-for="(itm, idx) in props.desc" :key="idx"
                class="text-[.9375rem] font-serif text-gray-500 leading-6 mb-[.8125rem] tablet:text-[1.125rem] tablet:leading-[1.5rem]">
                <p>{{ itm.means }}</p>
                <p v-if="itm.example"
                    class="text-[.9375rem] text-gray-300 leading-6 mt-[.8125rem] tablet:text-base tablet:leading-6">{{
                        itm.example }}</p>
            </li>
        </ul>
        <p v-if="links"
            class="text-[1rem] tablet:text-lg text-gray-300 mt-8 tablet:mt-10 mb-[1.0625rem] tablet:leading-6 tablet:mb-[1.5625rem] desktop:mt-10 desktop:mb-10">
            Synonyms
            <span v-for="(item, index) in links" :key="index"
                class="inline-block first:pl-6 pl-2 text-[1rem] font-bold text-purple cursor-pointer desktop:text-lg desktop:leading-6">{{
                    item }}</span>
        </p>
        <DividerHorizontal class="mt-8 mb-6 tablet:mt-10 tablet:mb-[1.1875rem]" />
        <p v-if="url" class="tablet:inline-block tablet:mr-5 text-[1rem] underline text-gray-300 mb-2 tablet:text-lg">
            Source</p>
        <a v-if="url" :href="url" class="tablet:text-lg inline-block cursor-pointer text-gray-500 leading-[1.0625rem]">
            <span class="tablet:text-lg underline text-sm align-middle font-serif">{{ url }}</span>
            <IconExternalLink class="inline-block w-3 h-3 ml-[.5625rem] align-middle" />
        </a>
    </div>
</template>