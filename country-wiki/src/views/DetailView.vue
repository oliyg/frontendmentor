<script setup>
import GoBackBtn from '@/components/GoBackBtn.vue';
import PageContainer from '@/components/PageContainer.vue';
import { useRoute } from 'vue-router';
import { useDbStore } from '@/stores/home';
import { watch, computed, ref } from 'vue';
import CountryDetail from '@/components/CountryDetail.vue'

const route = useRoute()
const code = computed(() => route.query.code);
const dbStore = useDbStore();
const db = computed(() => dbStore.db);
const detail = ref(null)

const query = () => {
    if (!db.value.length) return
    detail.value = dbStore.queryDataByCode(code.value)
}

watch(code, query, { immediate: true })

</script>

<template>
    <PageContainer bg>
        <GoBackBtn />
        <CountryDetail :country="detail" />
    </PageContainer>
</template>
